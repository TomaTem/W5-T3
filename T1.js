// 1
// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

function newArr(num) {
    let arr = [];
    for (let i=1; i<=num; i++) {
        let a = i.toString().repeat(i);
        arr.push(+a);
    }
    return arr;
}

// Переписала после созвона с Пашей. Убрала перевод элементов из строки в число, т.к. по условию задачи нужны строки в конечном массиве. 2 строки условия объединила в одну
function newArr2(num) {
    let arr = [];
    for (let i=1; i<=num; i++) {
        arr.push(i.toString().repeat(i));
    }
    return arr;
}

console.log(newArr(5));
console.log(newArr2(5));