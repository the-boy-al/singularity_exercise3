function whereIsWaldo (arr) {
    let symb1 = arr[0][0];
    let symb2 ='';
    let concatArr = arr.flat(1);
    let n1 = 0;
    let n2 = 0;
    for (let i = 0; i < concatArr.length; i++) {
        if (concatArr[i] !== symb1) {
            symb2 = concatArr[i];
            n2 ++;
        } else {
            n1++;
        }
    }
    if (n2 > n1) {
        let inter = symb1;
        symb1 = symb2;
        symb2 = inter;
    }
    for (let i = 0 ; i<arr.length ; i++) {
        for (let j =0 ; j < arr[i].length; j++) {
        //     // console.log (symb1 !== arr[i][j+1]);
            if (symb2 === arr[i][j]){
                return [i+1,j+1];
            }
        }
    }
    return [undefined, undefined];
}
  
  
  console.log(whereIsWaldo([
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"]
  ])) //➞ [3, 2]
  
  console.log(whereIsWaldo([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"]
  ])) //➞ [2, 4]
  
  console.log(whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
  ])) //➞ [5, 1]