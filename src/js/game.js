import { WORDS } from "./consts"
import { KEYBOARD_LETTERS } from "./consts"

const gameDiv = document.getElementById('game')
const logoH1 = document.getElementById('logo')

let triesLeft
let winCount

const createplaceholdersHtml = () => {
    const word = sessionStorage.getItem('word')
    //аналог цикла фор
    // const wordArray = Array.from(word)
    // const placeholdersHtml = wordArray.reduce((acc, current, i) =>
    //     acc + `<h1 id="letter_${i}" class="letter">_</h1>`, ''
    // )

    let placeholdersHtml = ''
    for (let i = 0; i < word.length; i++) {
        placeholdersHtml = placeholdersHtml + `<h1 id="letter_${i}" class="letter">_</h1>`
    }

    return `<div id="placeholders" class="placeholders-wrapper ">${placeholdersHtml}</div>`
}

const createKeyboardHtml = () => {
    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    keyboard.id = 'keyboard'
    //аналог цикла фор
    // const keyboardHtml = KEYBOARD_LETTERS.reduce((acc, current) => {
    //   return  acc + `<button id="${current}" class="button-primary">${current}</button>`
    // }, '')
    // keyboard.innerHTML = keyboardHtml
    // return keyboard
    let keyboardHtml = ''
    for (let i = 0; i < KEYBOARD_LETTERS.length; i++) {
        keyboardHtml = keyboardHtml + `<button id="${KEYBOARD_LETTERS[i]}" class="button-primary keyboard-button">${KEYBOARD_LETTERS[i]}</button>`

    }
    keyboard.innerHTML = keyboardHtml
    return keyboard
}

const createHangmanImg = () => {
    const image = document.createElement('img')
    image.src = "images/hg-0.png"
    image.alt = 'hangman Imge'
    image.classList.add('hangman-img')
    image.id = "hangman-id"
    return image
}
const createQuiteButton = () => {
    const quiteButton = document.createElement('button')
    quiteButton.classList.add('quitebutton')
    quiteButton.id = 'quitebutton-id'
    let quiteButtonHtml = ''
    quiteButtonHtml = quiteButtonHtml + `<button id="quitebutton" class="button-secondary px-2 py-1 mt-4">Quite game</button>`
    quiteButton.innerHTML = quiteButtonHtml
    return quiteButton
}

const checkLetter = (letter) => {
    const word = sessionStorage.getItem('word')
    const inputletter = letter.toLowerCase()
    //буквы нет в слове
    if (!word.includes(inputletter)) {
        const triesCounter = document.getElementById('tries-left')
        triesLeft -= 1
        triesCounter.innerText = triesLeft
        const hangmanImg = document.getElementById('hangman-id')
        hangmanImg.src = `images/hg-${10 - triesLeft}.png`

        if (triesLeft === 0) {
            stopGame('lose')
        }
    } else {
        const wordArray = Array.from(word)
        wordArray.forEach((currentLetter, i) => {
            if (currentLetter === inputletter) {
                winCount += 1
                if (winCount === word.length) {
                    stopGame('win')
                    return
                }
                document.getElementById(`letter_${i}`).innerText = inputletter.toUpperCase()
            }
        })
    }
}


const stopGame = (status) => {

    document.getElementById('placeholders').remove()
    document.getElementById('tries').remove()
    document.getElementById('keyboard').remove()
    document.getElementById('quitebutton-id').remove()

    const word = sessionStorage.getItem('word')

    if (status === 'win') {
        document.getElementById('hangman-id').src = 'images/hg-win.png'
        document.getElementById('game').innerHTML += '<h2 class="result-header">You won!</h2>'
    } else if (status === 'lose') {
        document.getElementById('game').innerHTML += '<h2 class="result-header">You lost :(</h2>'
    } else if (status === 'quite') {
        document.getElementById('hangman-id').src = 'images/hg-again.png'
        // logoH1.classList.remove('logo-sm')
        // document.getElementsById('hangman-id').remove()

    }

    document.getElementById('game').innerHTML += `<p>The word was:<span class="result-word">${word}</span></p><button id="play-again" class="button-primary px-5 py-2 mt-3">Play again</button>`
    document.getElementById('play-again').onclick = startGame
}

export const startGame = () => {
    triesLeft = 10
    winCount = 0
    logoH1.classList.add('logo-sm')
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem('word', wordToGuess)

    gameDiv.innerHTML = createplaceholdersHtml()

    gameDiv.innerHTML += `<p id="tries" class="mt-2">TRIES LEFT: <span id="tries-left" class="font-medium text-red-600">10</span></p>`

    const keyboardDiv = createKeyboardHtml()
    keyboardDiv.addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.disabled = true
            checkLetter(event.target.id)
        }

    })

    const hangmanImg = createHangmanImg()
    const quite = createQuiteButton()

    gameDiv.prepend(hangmanImg)
    gameDiv.appendChild(keyboardDiv)
    gameDiv.appendChild(quite)

    document.getElementById('quitebutton-id').onclick = () => {
        const isSure = confirm('Are ypu sure you want to quite and lose your progress?')
        if (isSure) {
            stopGame('quite')
        }

    }
}
