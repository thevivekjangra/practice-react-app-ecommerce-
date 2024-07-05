// let userNames = ["ram", "rahul", "rajat", 1, 4, 2, ["hello", "how", "are"], { name: "Viv", age: 21 }]

// let arrlength = userNames.length;
// for (let i = 0; i < arrlength; i++) {
//     console.log(userNames[i]);
// }

// for let of

/*for (let elements of userNames) {
    console.log(elements);
}
*/
//for let in

/*for (let elements in userNames) {
    console.log(elements);
}*/

//array mehods - Push and Concat

/*let fruits = ["Apple", "Banana", "Grapes"];
console.log(fruits);
fruits.push("orange")
console.log(fruits);
fruits.push("berry", "guava")
console.log(fruits);*/

//push method

/*let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2, arr3)

console.log(arr4);
console.log(arr5);*/

//pop method

/*let courses = ["html", "css", "reactjs", "js", "mongo"]
console.log("Courses - ", courses);
let removedItem = courses.pop();
console.log("Removed Items - ", removedItem);
console.log("Updated Course -", courses);*/

//Slice Method

/*let players = ["Rohit", "Kholi", "Pant", "Siraj", "Faf"]
let value = players.slice(3, 4)
console.log(value);*/

/*let userNames = "ramesh"

let firstCh = userNames[0].toUpperCase();
let capName = firstCh.concat(userNames.slice(1))
console.log(capName);
*/

//spice

/*let cars = ["Bmw", "Audi", "Toyota", "Maruti", "Tata", "Mahindra"]

let indianCars = cars.splice(3, 3);
console.log("Indian cars -", indianCars);
console.log("cars", cars);*/

//Includes

//sort

/*const fruits = ["apple", "cherry", "orange", "grapes"]
fruits.sort();
console.log(fruits);

const numbers = [1, 4, 3, 7, 4, 88, 9, 2]
function sortNumber(a, b) {
    return a - b;
}
numbers.sort(sortNumber)
console.log(numbers);*/

//split and join

/*let stringg = "MOHIT";
let arrstr = stringg.split("").reverse();

console.log(arrstr);
let reversestringg = arrstr.join("");
console.log(reversestringg);*/

//spread array

/*let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
console.log(...arr1, ...arr2, 9, 10);*/

//Destructing array

/*const arr = [1, 2, 3, ["a", "b"]]
const [, , , hello] = arr
console.log(hello);
console.log(hello.length);*/

//swap

/*let a = 1;
let b = 5;

[a, b] = [b, a]
console.log(a, b);*/

//Copying Array by refrence

//sallow copy
let arr1 = [1, 2, 3]
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2)


//spread operator

let arr3 = [...arr1];

arr3.push(5);
console.log(arr1);
console.log(arr3)

//with for loop
let arr4 = [];
for (let i of arr1) {
    arr4.push(i)
}
console.log(arr4);