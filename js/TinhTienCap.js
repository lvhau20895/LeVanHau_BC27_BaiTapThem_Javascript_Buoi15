function getId(id) {
    return document.getElementById(id);
}

function tinhTienCap() {
    // B1: Lấy input đầu vào (mã khách hàng, số kênh, loại khách hàng, số kết nối)
    var maKH = getId("maKhachHang").value;
    var soKenh = +getId("soKenh").value;
    var ketNoi = +getId("ketNoi").value;

    // B4: Tạo biến loaiKH hứng kết quả hàm loaiKhachHang(loaiKhach)
    var loaiKH = loaiKhachHang(loaiKhach);

    // B5: In kết quả ra trình duyệt
    hienThiTienCap(maKH, loaiKH, soKenh, ketNoi);

    // if(loaiKH === "nhaDan") {
    //     tienCap = 4.5 + 20.5 + soKenh * 7.5;
    // } else if(loaiKH === "doanhNghiep") {
    //     if(ketNoi <= 10) {
    //         tienCap = 15 + 75 + soKenh * 50;
    //     } else if(ketNoi > 10) {
    //         tienCap = 15 + 75 + (ketNoi - 10) * 5 + soKenh * 50;
    //     }
    // } else {
    //     alert("Hãy chọn loại khách hàng");
    // }

    // getId("tienCap").style.display = "block";
    // getId("xuatTienCap").innerHTML = "Mã khách hàng: " + maKH + "; " + "Tiền cáp: " + "$" + tienCap.toFixed(2);
}

// B2: Tạo hàm loaiKhachHang chọn loại khách với tham số (loaiKhach) để trả vể két quả tương ứng với từng value
//     Kết hợp thuộc tính onChange() gọi id loaiKhach để ẩn hiện số kết nối khi chọn doanh nghiệp
function loaiKhachHang(loaiKhach) {
    var loaiKhach = getId("loaiKhach").value;

    if(loaiKhach === "") {
        getId("ketNoi").style.display = "none";
    }

    if(loaiKhach === "nhaDan") {
        getId("ketNoi").style.display = "none";
        return "nhaDan";
    }

    if(loaiKhach === "doanhNghiep") {
        getId("ketNoi").style.display = "block";
        return "doanhNghiep";
    }
}

// B3: Tách hàm hiển thị tiền cáp với các tham số (maKH, loaiKH, soKenh, ketNoi) để tính toán từng trượng hợp và in kết quả
function hienThiTienCap(maKH, loaiKH, soKenh, ketNoi) {
    // Tạo biến tienCap và xử lý logic
    var tienCap = 0;
    const donViTien = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
      });
    if(loaiKH === "nhaDan") {
        tienCap = 4.5 + 20.5 + soKenh * 7.5;
    } else if(loaiKH === "doanhNghiep") {
        if(ketNoi <= 10) {
            tienCap = 15 + 75 + soKenh * 50;
        } else if(ketNoi > 10) {
            tienCap = 15 + 75 + (ketNoi - 10) * 5 + soKenh * 50;
        }
    } else {
        alert("Hãy chọn loại khách hàng");
    }

    // Gọi id in kết quả
    getId("tienCap").style.display = "block";
    getId("xuatTienCap").innerHTML = "Mã khách hàng: " + maKH + "; " + "Tiền cáp: " + donViTien.format(tienCap);
}

