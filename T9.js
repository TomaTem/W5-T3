// 9
// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function separator(arr, n) {
    let result = [];
    for (let i=0; i<arr.length; i += n) {
        result.push(arr.slice(i, i+n));
    }
    return result;
}

console.log(separator([1, 2, 3, 4, 5, 6], 4))