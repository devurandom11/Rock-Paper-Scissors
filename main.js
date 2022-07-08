// Design base page for Rock-Paper-Scissors game.
// Declare global page elements
const body = document.querySelector("body");
const header = document.createElement("header");
const h1 = document.createElement("h1");
const div = document.createElement("div");
const p = document.createElement("p");
const h2 = document.createElement("h2");
const section = document.createElement("section");
const footer = document.createElement("footer");
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

// Style elements
body.style.cssText =
  'background-color: aqua; font-family: "Comic Sans MS", cursive, sans-serif; color: yellow; display: flex; flex-direction: column; height: 100vh;';
header.style.cssText =
  "display: flex; justify-content: center; margin-bottom: 250px;";
section.style.cssText =
  "display: flex; flex-direction: column; align-items: center; flex: 1; gap: 50px;";
div.style.cssText =
  "display: flex; flex-direction: row; justify-content: center; gap: 10px;";
footer.style.cssText =
  "display: flex; flex-shrink: 1; justify-content: center;";
buttonRock.style.cssText =
  "background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;";
buttonPaper.style.cssText =
  "background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;";
buttonScissors.style.cssText =
  "background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;";
h1.style.cssText = "font-size: 50px;";
h2.style.cssText = "font-size: 30px;";
p.style.cssText = "font-size: 20px;";
// Change buttonPaper color on hover

// Add content
h1.textContent = "Rock Paper Scissors";
h2.textContent = "Choose your weapon";
buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";
footer.textContent = "Made with ❤️ by: Devurandom11";

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

// Change button color and size on hover
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("mouseover", function () {
    button.style.cssText =
      "background-color: red; border: none; border-radius: 5px; padding: 10px; font-size: 1.5em;";
  });
  button.addEventListener("mouseout", function () {
    button.style.cssText =
      "background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;";
  });
});

let computerSelection = computerChoice();

// run functon playGame() when button is clicked
buttonRock.addEventListener("click", playGame);
buttonPaper.addEventListener("click", playGame);
buttonScissors.addEventListener("click", playGame);

function computerChoice () {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomNumber];
  return computerChoice;
}

// function playGame(computerChoice) {

// }