// 6
// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function deleteRepeat(arr) {
    let newArr = arr.filter((el, i) => arr.indexOf(el) === i);
    return newArr;
}
console.log(deleteRepeat([1, 2, 3, 1, 2]))