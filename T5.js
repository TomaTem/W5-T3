// 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

function deleteEl(arr, del) {
    del.forEach(no => arr = arr.filter(el => el!=no));
    return arr;
}

// Переписала после созвона с Пашей. Этот вариант не изменяет начальный массив
function deleteEl2(arr, del) {
    return arr.filter(el => !del.includes(el));
}

console.log(deleteEl([1, 2, 3, 1, 2, 4, 5], [1, 2, 5]));
console.log(deleteEl2([1, 2, 3, 1, 2, 4, 5], [1, 2, 5]))