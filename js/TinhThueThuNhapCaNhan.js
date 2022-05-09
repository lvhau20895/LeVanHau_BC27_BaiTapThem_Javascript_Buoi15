function getId(id) {
    return document.getElementById(id);
}

// KHÔNG TÁCH HÀM ==============================================
// function calculateTax() {
//     var fullName = getId("fullName").value;
//     var totalIncome = +getId("totalIncome").value;
//     var people = +getId("people").value;
//     var calculate = totalIncome - 4e6 - people * 16e5;
//     var tax = 0;

//     if(fullName == "" || totalIncome == "") {
//         alert("Vui lòng nhập giá trị");
//     } else if(calculate <= 60e6) {
//         tax = calculate * 0.05;
//     } else if(calculate <= 120e6) {
//         tax = calculate * 0.1;
//     } else if(calculate <= 210e6) {
//         tax = calculate * 0.15;
//     } else if(calculate <= 384e6) {
//         tax = calculate * 0.2;
//     } else if(calculate <= 624e6) {
//         tax = calculate * 0.25;
//     } else if(calculate <= 960e6) {
//         tax = calculate * 0.3;
//     } else {
//         tax = calculate * 0.35;
//     }

//     getId("alertTax").style.display = "block";
//     getId("showTax").innerHTML = "Họ tên: " + fullName + "; " + "Tiền thuế thu nhập cá nhân: " + tax.toLocaleString() + " VND";
// }

// TÁCH HÀM ==============================================
function calculateTax() {
    // B1: Lấy input đầu vào (họ tên, tổng thu nhập năm, số người phụ thuộc)
    var fullName = getId("fullName").value;
    var totalIncome = +getId("totalIncome").value;
    var people = +getId("people").value;

    // B4: Tạo biến calculate hứng kết quả hảm taxFormula(totalIncome, taxReduction, people, moneyPerr)
    var calculate = taxFormula(totalIncome, 4e6, people, 16e5);
    // B5: In kết quả ra trình duyệt
    showCalculateTax(fullName, totalIncome, calculate);
}

// B2: Tách hàm tính thu nhập chịu thuế có các tham số (totalIncome, taxReduction, people, moneyPer) và trả về thu nhập chịu thuế
function taxFormula(totalIncome, taxReduction, people, moneyPer) {
    return calculate = totalIncome - taxReduction - people * moneyPer;
}

// B3: Tách hàm xử lý và in kết quả có tham số (fullName, totalIncome, calculate)
function showCalculateTax(fullName, totalIncome, calculate) {
    // Tạo biến var tax xử lý logic
    var tax = 0;
    if(fullName == "" || totalIncome == "") {
        alert("Vui lòng nhập giá trị");
    } else if(calculate <= 60e6) {
        tax = calculate * 0.05;
    } else if(calculate <= 120e6) {
        tax = calculate * 0.1;
    } else if(calculate <= 210e6) {
        tax = calculate * 0.15;
    } else if(calculate <= 384e6) {
        tax = calculate * 0.2;
    } else if(calculate <= 624e6) {
        tax = calculate * 0.25;
    } else if(calculate <= 960e6) {
        tax = calculate * 0.3;
    } else {
        tax = calculate * 0.35;
    }

    // Gọi id in kết quả
    getId("alertTax").style.display = "block";
    getId("showTax").innerHTML = `Họ tên: ${fullName}; Tiền thuế thu nhập cá nhân: ${tax.toLocaleString()} VND`;
}