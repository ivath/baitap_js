let gioLam = document.getElementById("soNgayLam");
let tienLuong = 100000;
// console.log(typeof tienLuong);

document.getElementById("baiTap1").onclick = function () {
  let ngayLam = document.getElementById("soNgayLam").value * 1;
  console.log(ngayLam);
  let tongTien = ngayLam * tienLuong;

  document.querySelector(".bg-danger").innerHTML =
    "Tổng tiền của bạn là " +
    tongTien.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

document.getElementById("baiTap2").onclick = function () {
  let soThuc1 = document.getElementById("soThuc1").value * 1;
  let soThuc2 = document.getElementById("soThuc2").value * 1;
  let soThuc3 = document.getElementById("soThuc3").value * 1;
  let soThuc4 = document.getElementById("soThuc4").value * 1;
  let soThuc5 = document.getElementById("soThuc5").value * 1;

  let giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

  document.querySelector(".bg-success").innerHTML =
    "Giá Trị Trung Bình Là " + giaTriTrungBinh;
};

document.getElementById("baiTap3").onclick = function () {
  let giaUSD = 25426;

  let soUSD = document.getElementById("nhapSoUSD").value * 1;

  let themDonVi = document.querySelectorAll("donvi");

  themDonVi.innerHTML = soUSD.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let quyDoi = giaUSD * soUSD;

  document.querySelector(".bg-secondary").innerHTML =
    "Giá tiền Việt Nam là " +
    quyDoi.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

document.getElementById("baiTap4").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  let chuVi = (chieuDai + chieuRong) * 2;

  document.querySelector(".bg-warning").innerHTML =
    "Chu vi của hình chữ nhật là " + chuVi;
};

document.getElementById("baiTap4_1").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  let dienTich = chieuDai * chieuRong;

  document.querySelector(".bg-info").innerHTML =
    "Diện tích của hình chữ nhật là " + dienTich;
};

document.getElementById("baiTap5").onclick = function () {
  let haiChuSo = document.getElementById("haiChuSo").value * 1;

  let donVi = haiChuSo % 10;
  let hangChuc = haiChuSo / 10;

  let tongSo = Math.floor(donVi + hangChuc);

  document.querySelector(".bg-primary").innerHTML = "Tổng 2 ký số là " + tongSo;
};
