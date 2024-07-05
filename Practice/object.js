//object properties

//const { use } = require("express/lib/application");

/*let personObj = {
    name: "viv",
    age: 19,
    job: "SDE",
    skills: ["html", "reactjs"]
}
delete personObj.age;
console.log(personObj);
console.log(personObj["skills"]);*/

//Functions and Properties

/*const obj = {
    name: "John",
    greetmssg: function () {
        console.log("Hii,How are you?");
    },
    bye() {
        console.log("ktm tata bye bye");
    }
}
console.log(obj);
console.log(obj.greetmssg);
obj.greetmssg();*/

//computed properties

/*let prsn = {
    name: "DJ",
    age: 19,
}
prsn.city = "alwar";
console.log(prsn);*/

//ShortHand Property

/*function getobj(name, age, city) {
    return {
        name,
        age,
        city,
    }
}
let obj = getobj("Ramu", 9, "Mumbai");
console.log(obj);

//------>another way to write shorthand property

const name = "Ramu ka bhai";
const Job = "Pta nhi";
console.log({ name, Job }); */

//For in
/*const Obj = {
    name: "Ramu ka Chacha",
    city: "nhi bta rha"
}

const isPropertyFound = "name" in Obj;
console.log(isPropertyFound);*/

//Object Refrence and shallow copy
/*const person1 = {
    name: "Ramu ka tau",
    age: 99
}

const person2 = person1;

person2.name = "Ramu ka Papa";

console.log(person1);
console.log(person2); //getting same property because they are taking refrence form same mermory and in person2 we have alloted new name so that memory is updated
//--->making shallow copy

const x1 = {
    name: "kalu",
    age: 45,
    address: {
        city: "Narwana"
    }
}
const x2 = Object.assign({}, x1);

x2.name = "Bhalu";
x2.age = 50;
x2.address.city = "Delhi"

console.log(x1);
console.log(x2);*/

//Option Chanining

/*const user = {
    name: "new",
    age: 79,
    getAddress: () {
        console.log("mumbai");
    }
}
//Sol 1
if (user.address !== undefined) {
    console.log(user.address.city);
} else {
    console.log("Address not found");
}

//sol 2 Optional Chaning

console.log(user.getAddress?.city);*/

//Destrcuting Object
/*const company = {
    engineer: {
        emp1: {
            name: "Vivek Jangra",
            city: "Alwar"
        },
        emp2: {
            name: "yash",
            city: "Delhi"
        }
    },
    Sales: {
        em1: {
            name: "Ansh",
            city: "Ggn"
        }
    },
    youtube: {
        name: "rahul",
        city: "Delhi"
    }
}

let { engineer: { emp2: { city } } } = company;
console.log(city);*/

//Key , Values and entries

const user = {
    name: "Rahul",
    city: "Delhi",
    age: 23
}

let entries = Object.entries(user);
//console.log(entries);

let keys = Object.keys(user);
//console.log(keys);

let values = Object.values(user);
console.log(values);

//count number of values or keys in object
let count = 0;
for (i of values) {
    count++;
}
console.log(count);