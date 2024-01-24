import '../css/style.css'
import { darkModehandle } from './utils';
import { startGame } from './game';

darkModehandle()
const startGameButton = document.getElementById('startGame')
startGameButton.addEventListener('click', startGame)

