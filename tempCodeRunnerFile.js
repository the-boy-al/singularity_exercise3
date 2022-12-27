for (let i = 0; i < unionArr.length; i++){
        for (let j = 0 ; j < shortArr2.length; j++) {
            if (unionArr[i] === shortArr2[j]) {
                break;
            }
            if (j === shortArr2.length - 1) {
                unionArr.push(shortArr2[j]);
            }
        }
    }