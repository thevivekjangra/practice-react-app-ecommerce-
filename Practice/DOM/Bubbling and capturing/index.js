// const form = document.querySelector("#form");
// const div = document.querySelector("#div");
// const para = document.querySelector("#Para");

// para.addEventListener("click", () => {
//     alert(("This is para"))
// }, true)

// div.addEventListener("click", () => {
//     alert("This is Div")
// }, true)
// form.addEventListener("click", () => {
//     alert("This is Form")
// }, true)

const parent = document.getElementById("parent-container");

const card = document.createElement("div");
card.classList.add("card");

const imageElement = document.createElement("img");
imageElement.classList.add("image");

imageElement.setAttribute("src", "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

imageElement.setAttribute("height", "200px")
imageElement.setAttribute("width", "200px")

const paraElement = document.createElement("h2");
paraElement.classList.add("para");

card.appendChild(paraElement);
card.appendChild(imageElement);
parent.appendChild(card)