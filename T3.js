// 3
// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]


function clearArr(arr) {
    let arr1 = arr.filter(el => Boolean(el) == true);
    return arr1;
}

// Переписала после созвона с Пашей. Переписала условие короче и убрала создание лишней переменной
function clearArr2(arr) {
    return arr.filter(Boolean);
}

console.log(clearArr([0, 1, false, 2, undefined, '', "ghbdtn", 3, null]));
console.log(clearArr2([0, 1, false, 2, undefined, '', "ghbdtn", 3, null]));