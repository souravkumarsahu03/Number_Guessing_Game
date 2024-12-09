const randomNum = parseInt(Math.random() * 100 + 1 )

const submit = document.querySelector('#submitguess')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.prevGuess')
const leftGuess = document.querySelector('.leftGuess')
const lowHigh = document.querySelector('.lowHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){  //Guess the valid numbr
    if(isNaN(guess)){
        alert('Enter a valid number.')
    }
    else if(guess < 1){
        alert('Enter a number more than 1')
    }
    else if(guess > 100){
        alert('Enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum} `)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNum){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNum){
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    leftGuess.innerHTML = `${11-numGuess}`
}


function displayMessage(message){
    lowHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h4 id="newGame"> [*Refresh to start a new Game] </h4>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newGame =  document.querySelector('#newGame')
   newGame.addEventListener('click', function(e){
    randomNum = parseInt(Math.random() * 100 + 1 )
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    leftGuess.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)


    playGame = true
   })
}