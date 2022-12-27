function intersectionUnion(arr1, arr2) {
    let shortArr1 = [arr1[0]];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0 ; j < shortArr1.length; j++) {
            if (arr1[i] === shortArr1[j]) {
                break;
            }
            if (j === shortArr1.length - 1) {
                shortArr1.push(arr1[i]);
            }
        }
    }
    let shortArr2 = [arr2[0]];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0 ; j < shortArr2.length; j++) {
            if (arr2[i] === shortArr2[j]) {
                break;
            }
            if (j === shortArr2.length - 1) {
                shortArr2.push(arr2[i]);
            }
        }
    }
    let interArr = [];
    for (let i = 0; i < shortArr1.length; i++) {
        for (let j = 0 ; j < shortArr2.length; j++) {
            if (shortArr1[i] === shortArr2[j]) {
                interArr.push(shortArr1[i]);
            }
        }
    }

    let concatArr = shortArr1.concat(shortArr2);
    let unionArr = [concatArr[0]];
    for (let i = 0; i < concatArr.length; i++) {
        for (let j = 0 ; j < unionArr.length; j++) {
            if (concatArr[i] === unionArr[j]) {
                break;
            }
            if (j === unionArr.length - 1) {
                unionArr.push(concatArr[i]);
            }
        }
    }

    return [interArr,unionArr];
}


console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9])) //➞ [[4], [1, 2, 3, 4, 5, 9]]
console.log(intersectionUnion([1, 2, 3], [4, 5, 6])) //➞ [[], [1, 2, 3, 4, 5, 6]]
console.log(intersectionUnion([1, 1], [1, 1, 1, 1])) //➞ [[1], [1]]

