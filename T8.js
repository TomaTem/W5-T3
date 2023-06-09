// 8
// Напишите функцию, которая преобразует глубокий массив в одномерный.
// Задачу нужно решить двумя способами!
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

function newArray1(arr) {
    let newArr = arr.flat(Infinity);
    return newArr;
}
console.log(newArray1([1, 2, [3, 4, [5]]]));

// Переписала после созвона с Пашей. Убрала создание дополнительной переменной
function newArray3(arr) {
    return arr.flat(Infinity);
}

function newArray2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
            i -= 1;
        }
    }
    return arr;
}
console.log(newArray2([1, 2, [[3], 4, [5], [6, [7], 9]]]));
