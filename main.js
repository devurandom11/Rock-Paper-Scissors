// Design base page for Rock-Paper-Scissors game.
// Declare global page elements
const body = document.querySelector('body')
const header = document.createElement('header')
const h1 = document.createElement('h1')
const div = document.createElement('div')
const p = document.createElement('p')
const h2 = document.createElement('h2')
const section = document.createElement('section')
const footer = document.createElement('footer')
const buttonRock = document.createElement('button')
const buttonPaper = document.createElement('button')
const buttonScissors = document.createElement('button')
const scoreBoard = document.createElement('div')
const h3 = document.createElement('h3')
const scoreWrapper = document.createElement('div')
const playerScore = document.createElement('div')
const computerScore = document.createElement('div')
const playerScoreUpdate = document.createElement('span')
const computerScoreUpdate = document.createElement('span')

// Style elements
body.style.cssText =
  'background-color: aqua; font-family: "Comic Sans MS", cursive, sans-serif; color: yellow; display: flex; flex-direction: column; height: 100vh;'
header.style.cssText =
  'display: flex; justify-content: center; margin-bottom: 250px;'
section.style.cssText =
  'display: flex; flex-direction: column; align-items: center; gap: 50px; height: 30vh;'
div.style.cssText =
  'display: flex; flex-direction: row; justify-content: center; gap: 10px;'
footer.style.cssText = 'display: flex; flex-shrink: 1; justify-content: center;'
buttonRock.style.cssText =
  'background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;'
buttonPaper.style.cssText =
  'background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;'
buttonScissors.style.cssText =
  'background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em;'
h1.style.cssText = 'font-size: 50px;'
h2.style.cssText = 'font-size: 30px;'
h3.style.cssText = 'font-size: 30px;'
p.style.cssText = 'font-size: 20px;'
scoreBoard.style.cssText =
  'display: flex; justify-content: center; align-items: center; gap: 10px; flex-direction: column; flex: 1;'
scoreWrapper.style.cssText =
  'display: flex; justify-content: space-between; gap: 20px;'
playerScore.style.cssText = 'font-size: 20px;'
computerScore.style.cssText = 'font-size: 20px;'
playerScoreUpdate.style.cssText = 'font-size: 20px;'
computerScoreUpdate.style.cssText = 'font-size: 20px;'

// Change buttonPaper color on hover

// Add content
h1.textContent = 'Rock Paper Scissors'
h2.textContent = 'Choose your weapon'
buttonRock.textContent = 'Rock'
buttonPaper.textContent = 'Paper'
buttonScissors.textContent = 'Scissors'
footer.textContent = 'Made with ❤️ by: Devurandom11'
h3.textContent = 'Score'
playerScoreUpdate.textContent = '0'
computerScoreUpdate.textContent = '0'
playerScore.textContent = 'Player: '
computerScore.textContent = 'Computer: '

// Append elements
body.appendChild(header)
body.appendChild(section)
body.appendChild(scoreBoard)
body.appendChild(footer)
header.appendChild(h1)
section.appendChild(h2)
section.appendChild(p)
section.appendChild(div)
div.appendChild(buttonRock)
div.appendChild(buttonPaper)
div.appendChild(buttonScissors)
scoreBoard.appendChild(h3)
scoreBoard.appendChild(scoreWrapper)
scoreWrapper.appendChild(playerScore)
scoreWrapper.appendChild(playerScoreUpdate)
scoreWrapper.appendChild(computerScore)
scoreWrapper.appendChild(computerScoreUpdate)

// Change button color and size on hover
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('mouseover', function () {
    button.style.cssText =
      'background-color: red; border: none; border-radius: 5px; padding: 10px; font-size: 1.5em; transition: all 0.2s;'
  })
  button.addEventListener('mouseout', function () {
    button.style.cssText =
      'background-color: yellow; border: none; border-radius: 5px; padding: 10px; font-size: 1em; transition: all 0.5s;'
  })
})

// run functon playGame() when button is clicked
buttonRock.addEventListener('click', playGame)
buttonPaper.addEventListener('click', playGame)
buttonScissors.addEventListener('click', playGame)

function playGame() {
  if (
    computerScoreUpdate.textContent < '5' &&
    playerScoreUpdate.textContent < '5'
  ) {
    const playerChoice = this.textContent
    const computerSelection = computerChoice()
    const result = determineWinner(playerChoice, computerSelection)
    p.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}. ${result}`
  } // Display win message
  else if (computerScoreUpdate.textContent === '5') {
    p.textContent = 'You lost! The computer beat you 5 times!'
  } else if (playerScoreUpdate.textContent === '5') {
    p.textContent = 'You won! You beat the computer 5 times!'
  }
}

function computerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  const computerChoice = choices[randomNumber]
  return computerChoice
}

// Determine winner function
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!"
  } else if (playerChoice === 'Rock') {
    if (computerChoice === 'Paper') {
      computerScoreUpdate.textContent =
        parseInt(computerScoreUpdate.textContent) + 1
      return 'You lose!'
    } else {
      playerScoreUpdate.textContent =
        parseInt(playerScoreUpdate.textContent) + 1
      return 'You win!'
    }
  } else if (playerChoice === 'Paper') {
    if (computerChoice === 'Scissors') {
      computerScoreUpdate.textContent =
        parseInt(computerScoreUpdate.textContent) + 1
      return 'You lose!'
    } else {
      playerScoreUpdate.textContent =
        parseInt(playerScoreUpdate.textContent) + 1
      return 'You win!'
    }
  } else if (playerChoice === 'Scissors') {
    if (computerChoice === 'Rock') {
      computerScoreUpdate.textContent =
        parseInt(computerScoreUpdate.textContent) + 1
      return 'You lose!'
    } else {
      playerScoreUpdate.textContent =
        parseInt(playerScoreUpdate.textContent) + 1
      return 'You win!'
    }
  }
}
