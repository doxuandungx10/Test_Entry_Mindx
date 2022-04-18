/*
1. Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

Ví dụ: INPUT là [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”] thì 
OUTPUT return là [“PHUOC”, “KHANH”]
[JavaScript] Syntax Tips

*/

function allLongestStrings(inputArray) {
    let maxIndex = 0;
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > inputArray[maxIndex].length) {
            maxIndex = i
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == inputArray[maxIndex].length) result.push(inputArray[i])
    }
    return result
}
console.log(allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));

// ==============================================================
/*
2. Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
[JavaScript] Syntax Tips

*/

function alternatingSums(a) {
    let firstRow = 0;
    let secondRow = 0;
    let result = [];
    for (let i = 0; i < a.length; i += 2) {
        firstRow += a[i];
    }
    for (let i = 1; i < a.length; i += 2) {
        secondRow += a[i];
    }
    result.push(firstRow, secondRow);
    return result
}
console.log(alternatingSums([60, 40, 55, 75, 64]));



