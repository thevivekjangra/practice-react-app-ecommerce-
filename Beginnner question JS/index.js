//1. if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
/*const solution = (number) => {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
solution(10);*/

//2.Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

/*const even_or_odd = (num) => {
    if (num % 2 == 0) {
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}
even_or_odd(6);*/

//3. Clock The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.

/*const clock = (h, m, s) => {
    return ((h * 60 * 60) + (m * 60) + s) * 1000;
}
console.log(clock(1, 0, 0));*/

//4. Returning Strings Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?

/*const str = (userName) => {
    console.log(`Hello, ${userName} How are you doing today?`);
}
str("Vivek")*/

//5.  Keep Hydrated! Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. Given the time in hours, you need to return the number of litres of water that Nathan will drink, rounded to the smallest value

/*const water = (time) => {
    return time * 0.5;
}
console.log(water(2));*/

//6. Vowel CountReturn the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.

/*const vowel = (str) => {
    let count = 0;
    for (let i of str) {
        if ('aeiou'.includes(i)) {
            count++;
        }
    }
    console.log(count);
}
vowel("aeeiifo");*/

//7. Disemvowel Trolls Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

const removeVowels = (str) => {
    for (let i of str) {
        str.replace(/'aeiou'/"")
    }
    console.log(str);
}
removeVowels("This is Web Development")