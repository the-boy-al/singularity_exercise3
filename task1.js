function lonelyInteger(arr) {
    let result;
    let inter;
    for (let i of arr) {
        inter = i;
        for (let j = 0; j < arr.length; j++) {
            if ((i + arr[j]) === 0) {
                break;
            }
            if (j === arr.length - 1){
                result = i;
            }
        }
    }
    return result;
}

console.log(lonelyInteger([1, -1, 2, -2, 3])) //➞ 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])) //➞ -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])) //➞ -9