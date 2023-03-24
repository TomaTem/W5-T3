// 10
// Напишите функцию, которая создаст массив из уникальных значений, 
// которые есть в каждом из предоставленных массивов.
// Ожидаемый результат: 
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

function commonArr(arr) {
    let repeats = [];
    let result = [];
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<=arr[i].length; j++) {     
            if (arr[i].includes(arr[i+1][j])) {
                repeats.push(arr[i+1][j]);
            }
        };
    } 
    let obj = repeats.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;  
        return acc;
        }, {})
    for (let key in obj) {
        if (obj[key] == (arr.length-1)) {
            if (Number(key) == key) result.push(+key);
            else result.push(key);
        } 
    }
    return result;
}

let arr1 = [['a', 'b', 4], [4, 'b', 'c'], ['b', 4, 'e'], ['b', 'e', 4]];
let arr2 = [[1, 2], [2, 3]];
console.log(commonArr(arr1));
console.log(commonArr(arr2));