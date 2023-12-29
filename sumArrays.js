// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).
var a = [1, 2, 3];
var b = [4, 5, 6];

function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push((a[i] || 0) + (b[i]  || 0));
    }
    return c;
}

console.log(sumArray(a, b,));