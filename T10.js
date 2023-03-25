// 10
// Напишите функцию, которая создаст массив из уникальных значений, 
// которые есть в каждом из предоставленных массивов.
// Ожидаемый результат: 
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

// 1 способ
function commonArr(arr) {
    let repeats = [];
    let result = [];
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<=arr[i].length; j++) {     
            if (arr[i].includes(arr[i+1][j]) && arr[i+1].indexOf(arr[i+1][j]) == j) {
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

// 2 способ
function commonArr2(arr) {
    let obj = arr[0].reduce((acc, el) => {
        acc[el] = 1;
        return acc;
    }, {});
    for (let i=1; i<arr.length; i++) {
        for (let j=0; j<=arr[i].length; j++) {
            for (let key in obj) {
                if (key == arr[i][j] && arr[i].indexOf(arr[i][j]) == j) {
                obj[key] += 1;         
            } 
    }}}
    let result = [];
    for (let key in obj) {
        if (obj[key] == (arr.length)) {
            if (Number(key) == key) result.push(+key);
            else result.push(key);
        } 
    }
    return result;
}

// 3 способ
function commonArr3(arr) {
    let result = [];
    function doubles(...arr) {
        result = arr[0].filter((el) => {
        let index = arr[1].indexOf(el);
        if (index >= 0) return el;
    })};
    doubles(...arr);
    while (arr.length > 2) {
        arr.splice(0, 2, result);
        doubles(...arr);
    }
    return result;
};

let arr1 = [['a', 'b', 4], [4, 'b', 'b', 'c'], ['b', 4, 'e'], ['b', 'e', 4]];
let arr2 = [[1, 2], [2, 3]];
console.log(commonArr(arr1));
console.log(commonArr(arr2));

console.log(commonArr2(arr1));
console.log(commonArr2(arr2));

console.log(commonArr3(arr1));
console.log(commonArr3(arr2));