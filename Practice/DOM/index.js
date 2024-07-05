const startButton = document.querySelector(".start")
const countButton = document.querySelector(".count");
const stopButton = document.querySelector(".stop")
const inputButton = document.querySelector(".input")
const darkMode = document.querySelector(".mode")


//dark mode 
darkMode.addEventListener("click", () => {
    var mode = document.body;
    mode.classList.toggle("light-mode")
})

// let count = 0;
// startButton.addEventListener("click", () => {
//     if (startButton.innerText === "Start") {
//         startButton.innerText = "Begin";
//     }
//     else {
//         startButton.innerText = "Start";
//     }
// })
// countButton.addEventListener("click", () => {
//     count++;
//     console.log(count);
// });

// stopButton.addEventListener("click", () => {
//     stopButton.classList.toggle("btn-red");
// })

// darkButton.addEventListener("click", () => {
//     darkButton.classList.toggle("body")
// })

// inputButton.addEventListener("change", () => {
//     console.log(inputButton.value);
// })

// inputButton.addEventListener("input", () => {
//     console.log(inputButton.value);
// })

// inputButton.addEventListener("focus", () => {
//     console.log(inputButton.value);
// })

// inputButton.addEventListener("keyup", () => {
//     console.log(inputButton.value);
// })

//Mouse Events

