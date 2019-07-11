A = [5, 9, 7, 1, 4, 2, 6, 7] // length = 8
B = [7, 3, 5] // length = 3

Merge(A, B)

function Merge(arrA, arrB) {
    for (var i = 0; i < arrB.length; i++) {
        arrA.push(arrB[i]);
        //console.log(arrA[7 + i + 1])
    }
    Sort(arrA)
}

function Sort(arrMain) {
    for (var i = 0; i < arrMain.length; i++) {
        for (var j = 0; j < (arrMain.length - i - 1); j++) {
            if (arrMain[j] > arrMain[j + 1]) {
                var tmp = arrMain[j];
                arrMain[j] = arrMain[j + 1];
                arrMain[j + 1] = tmp;
                console.log(tmp + "|" + arrMain[j] + "," + arrMain[j + 1])
            }
        }
    }
    console.log(arrMain)
}