// 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

function deleteEl(arr, del) {
    del.forEach(no => arr = arr.filter(el => el!=no));
    return arr;
}
console.log(deleteEl([1, 2, 3, 1, 2, 4, 5], [1, 2, 5]))