// Design base page for Rock-Paper-Scissors game.
// Declare global page elements
const body = document.querySelector("body");
const header = document.createElement("header");
const h1 = document.createElement("h1");
const div = document.createElement("div");
const button = document.createElement("button");
const p = document.createElement("p");
const h2 = document.createElement("h2");
const section = document.createElement("section");
const footer = document.createElement("footer");
const buttonRock = button;
const buttonPaper = button;
const buttonScissors = button;

// Style elements
body.style.cssText =
  'background-color: aqua; font-family: "Comic Sans MS", cursive, sans-serif; color: yellow; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;';
section.style.cssText = 'display: flex; flex-direction: column; justify-content: center;';
div.style.cssText = "display: flex; flex-direction: row; justify-content: center;";
// Add content
h1.textContent = "Rock-Paper-Scissors";
h2.textContent = "Choose your weapon";
buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";


// Append elements
body.appendChild(header);
body.appendChild(section);
body.appendChild(footer);
header.appendChild(h1);
section.appendChild(h2);
section.appendChild(p);
section.appendChild(div);
div.appendChild(buttonRock);
div.appendChild(buttonPaper);
div.appendChild(buttonScissors);

