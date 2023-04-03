// 2
// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.

function sumNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(sum <= 10) sum += arr[i];
        else return i;
    }
}

// Переписала после созвона с Пашей. Сложение вынесла перед проверкой условия, чтобы в случаях, где нужно сложить все элементы массива для >10, функция тоже работала, а не выдавала undefined
function sumNumbers2(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum > 10) return i+1;
    }
}

console.log(sumNumbers([13, 15, 8, 35, 1, 7]));
console.log(sumNumbers([3, 5, 8]));
console.log(sumNumbers2([13, 15, 8, 35, 1, 7]));
console.log(sumNumbers2([3, 5, 8]));