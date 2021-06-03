let arr1 = [1,2,3,4,5,6,7,8,9,10];
function checkElementArray(element, arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            result = i;
            break;
        } else {
            result = 'Không có phần tử';
        }
    }
    return result;
}
document.write('Vị trí của phần tử cần tìm là: ');
let num = +prompt("Nhập vào phần tử cần tìm")
document.write(checkElementArray(num, arr1));