// 6
// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function deleteRepeat(arr) {
    let newArr = arr.filter((el, i) => arr.indexOf(el) === i);
    return newArr;
}

// Переписала после созвона с Пашей. Убрала создание дополнительной переменной
function deleteRepeat2(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i);
}

console.log(deleteRepeat([1, 2, 3, 1, 2]));
console.log(deleteRepeat2([1, 2, 3, 1, 2]));