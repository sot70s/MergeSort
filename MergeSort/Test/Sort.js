let arrMain = [5, 9, 7, 1, 2, 6]
let temp
let cc = 1
for (i = 0; i < arrMain.length; i++) {
    console.log('Main Round ' + (i + 1) + ' : ' + arrMain[i])
    for (j = cc; j < arrMain.length; j++) {
        console.log('Sub Round ' + (j) + ' : ' + arrMain[j])
        if (arrMain[i] < arrMain[j]) {
            temp = arrMain[i]
            arrMain[i] = arrMain[j]
            arrMain[j] = temp
        }
    }
    cc = cc + 1
    console.log(arrMain)
}
