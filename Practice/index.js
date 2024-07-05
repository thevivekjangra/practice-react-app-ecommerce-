// for (let i = 1; i <= 5; i++) {
//     console.log(i + "hello");
// }
// const username = "rahul";
// console.log(username.length);
// for (let i = 0; i < username.length - 1; i++) {
//     if (username[i] == "u") {
//         console.log(i);
//     }
// }

//nested loop

/*for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------");
}*/

//count character in string without lenght
/*let username = "Rahul kumar jha";
let count = 0;
for (let i = 0; i < username.length; i++) {
    count++;
}
console.log(`The number of ch in the username is ${count}`);*/


//find all the even numbers between 1 to 101

/*for (let i = 1; i <= 101; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is an even number`);
    }
}

//check whether a string includes vowels on not

let inputString = "apple is a fruit";
let vowels = "aeiou";
for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel`);
    }
    else {
        console.log(`${inputString[i]} is a not vowel`);
    }
}*/

//while and do while loop

/*let i = 0;
while (i < 5) {
    console.log("HII");
    i++;
}*/

//Function

/*function greeting() {
    console.log("Hello, I am VIV");
}
greeting();

function add(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    console.log(sum);
}
add(1, 5);

// anonymus fuction

let anonymusFun = function () {
    console.log("hello");
}
console.log(typeof anonymusFun);
anonymusFun();*/

//Return
function mult(x, y) {
    return x * y;
}
console.log(mult(4, 2));