// 7
// Напишите функцию, которая сравнивает два массива и возвращает true,
// если они идентичны.
// Ожидаемый результат: 
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false

function equal(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (let i=0; i< arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        } return true;  
    } else return false;
}

// Переписала после созвона с Пашей. Цикл заменен использованием метода. А стрелочная функция позволяет не писать if, else, return true и false
const equal2 = (arr1, arr2) => arr1.length == arr2.length && arr1.every((el, i) => el == arr2[i]);

console.log(equal([1, 2, 3], [1, 2, 3]));
console.log(equal([1, 2, 3], [1, 2, 4]));
console.log(equal([1, 2, 3], [1, 2, 3, 4]));
console.log(equal2([1, 2, 3], [1, 2, 3]));
console.log(equal2([1, 2, 3], [1, 2, 4]));
console.log(equal2([1, 2, 3], [1, 2, 3, 4]));