//pure function

/*
1. It take an argument
2. It should return something
3. For same input you should get same output
4. The result should not be influenced by outer parameter
5. It should  not mutate the original argument
*/
/*function appendNumber(arr) {
    let newArr = [];
    newArr.push(...arr, 5, 6);
    return newArr;
}
const result = appendNumber([1, 2, 3, 4]);
console.log(result);*/

//First Class Function
// function wrapper() {
//     return "Welcome to GFG";
// }
// function greetMessage(inner, name) {
//     console.log(name, inner);
// }
// greetMessage(wrapper(), "viv");

//map

// let arr = [1, 2, 3, 4];
// function square(number) {
//     return number ** 2;
// }
// const result = arr.map(square);
// console.log(result);

/*let arr = [1, 2, 3, 4];
const result = arr.map((number) => { return number ** 2 });
console.log(result);*/

//filter 
/*const arr = [1, 2, 3, 4];
const result = arr.filter(number => number > 3);
console.log(result);*/

//reduce
/*const arr = [1, 2, 3, 4];

const reduceFunction = (acc, cur) => acc + cur;

const result = arr.reduce(reduceFunction,0);
console.log(result);*/

//argumnets object
function cal() {
    let sum = 0;
    for (let value in arguments) {
        sum += value;
    }
    console.log(sum);
    const arr = [...arguments];
    console.log(arr);
    console.log(arguments);
}
cal(1, 2, 3, 4, 5, 6)