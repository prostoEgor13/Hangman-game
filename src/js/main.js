import '../css/style.css'
import { darkModehandle } from './utils';
import { startGameRandom } from './game';
import { startGameAnimals } from './game';
import { startGameCars } from './game';
import { startGameCities } from './game';
import { startGameIt } from './game';
import { createDevInfo } from './game';




darkModehandle()
createDevInfo()
const gameDiv = document.getElementById('game')
export const startGameButton = document.getElementById('startGame')
// startGameButton.addEventListener('click', startGame)
export let MODES = ''

const random = () => {
    const categoryRandom = document.createElement('button')
    categoryRandom.classList.add('catigoriesBtn')
    categoryRandom.id = 'RandomBtn'
    let categoryRandomHtml = ''
    categoryRandomHtml = categoryRandomHtml + `<button class="catigoriesB" id="RandomBtn">Random</button>`
    categoryRandom.innerHTML = categoryRandomHtml
    return categoryRandom
}
const animals = () => {
    const categoryAnimals = document.createElement('button')
    categoryAnimals.classList.add('catigoriesBtn')
    categoryAnimals.id = 'AnimalsBtn'
    let categoryAnimalsHtml = ''
    categoryAnimalsHtml = categoryAnimalsHtml + `<button class="catigoriesB" id="AnimalsBtn">Animals</button>`
    categoryAnimals.innerHTML = categoryAnimalsHtml
    return categoryAnimals
}
const cars = () => {
    const categoryCars = document.createElement('button')
    categoryCars.classList.add('catigoriesBtn')
    categoryCars.id = 'CarsBtn'
    let categoryCarsHtml = ''
    categoryCarsHtml = categoryCarsHtml + `<button class="catigoriesB" id="CarsBtn">Cars</button>`
    categoryCars.innerHTML = categoryCarsHtml
    return categoryCars
}
const cities = () => {
    const categoryCities = document.createElement('button')
    categoryCities.classList.add('catigoriesBtn')
    categoryCities.id = 'CitiesBtn'
    let categoryCitiesHtml = ''
    categoryCitiesHtml = categoryCitiesHtml + `<button class="catigoriesB" id="CitiesBtn">Cities</button>`
    categoryCities.innerHTML = categoryCitiesHtml
    return categoryCities
}
const it = () => {
    const categoryIT = document.createElement('button')
    categoryIT.classList.add('catigoriesBtn')
    categoryIT.id = 'ITBtn'
    let categoryITHtml = ''
    categoryITHtml = categoryITHtml + `<button class="catigoriesB" id="ITBtn">IT</button>`
    categoryIT.innerHTML = categoryITHtml
    return categoryIT
}
const showRandom = random()
const showAnimals = animals()
const showCars = cars()
const showCities = cities()
const showIt = it()



export const showModes = () => {
    startGameButton.addEventListener('click', () => {
        document.getElementById('startGame').remove()
        document.getElementById('aboutDeveloper').remove()
        gameDiv.appendChild(showRandom)
        gameDiv.appendChild(showAnimals)
        gameDiv.appendChild(showCars)
        gameDiv.appendChild(showCities)
        gameDiv.appendChild(showIt)
    })
    showRandom.addEventListener('click', () => {
        localStorage.setItem('ChooseMode', 'Random')
        startGameRandom()
        setModes()
    })
    showAnimals.addEventListener('click', () => {
        localStorage.setItem('ChooseMode', 'Animals')
        startGameAnimals()
        setModes()
    })
    showCars.addEventListener('click', () => {
        localStorage.setItem('ChooseMode', 'Cars')
        startGameCars()
        setModes()
    })
    showCities.addEventListener('click', () => {
        localStorage.setItem('ChooseMode', 'Cities')
        startGameCities()
        setModes()
    })
    showIt.addEventListener('click', () => {
        localStorage.setItem('ChooseMode', 'IT')
        startGameIt()
        setModes()
    })
}
const setModes = () => {
    if (localStorage.getItem('ChooseMode') == 'Random') {
        MODES = 'Random'

    }
    else if (localStorage.getItem('ChooseMode') == 'Animals') {
        MODES = 'Animals'

    }
    else if (localStorage.getItem('ChooseMode') == 'Cars') {
        MODES = 'Cars'

    }
    else if (localStorage.getItem('ChooseMode') == 'Cities') {
        MODES = 'Cities'

    }
    else if (localStorage.getItem('ChooseMode') == 'IT') {
        MODES = 'IT'

    }
    // console.log(MODES);
}

showModes()

