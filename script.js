import {mapsBlackOps1, mapsBlackOps2, mapsMW2, mapsMW3, mapsWaW} from "./data/maps.js"
import { gameModes } from "./data/gamemodes.js"
import { botsMax, botsMin, health, veteran, scoreLimits, healthRecovery, timeSpawn } from "./data/settings.js"

const mapGames = {
    MW2: mapsMW2,
    MW3: mapsMW3,
    BO1: mapsBlackOps1,
    BO2: mapsBlackOps2,
    WAW: mapsWaW,
};


const selectedGame = document.getElementById('codSelector');
const randomizeButton = document.getElementById('randomizeButton');

randomizeButton.addEventListener('click', randomizeSettings);


let selectedMapArray = [];

selectedGame.addEventListener('change', () => {
    const selectedGameKey = selectedGame.value;
    selectedMapArray = mapGames[selectedGameKey] || [];
    randomizeButton.disabled = selectedGameKey === 'default';
    document.getElementById('map').textContent = 'Pronto a generare!';
});

// Funzioni per la scelta casuale di modalità, bot e settaggi vari
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomizeSettings() {
    const selectedGameMode = getRandomItem(gameModes)
    const selectedBots = getRandomInt(botsMin, botsMax)
    const selectedHealth = getRandomItem(health)
    const selectedHealthRecovery = getRandomItem(healthRecovery)
    const selectedScoreLimit = getRandomItem(scoreLimits)
    const selectedVeteranMode = getRandomItem(veteran)
    const selectedTimeSpawn = getRandomItem(timeSpawn)

    if (selectedMapArray.length > 0) {
        const selectedMap = getRandomItem(selectedMapArray)
        document.getElementById('map').textContent = selectedMap
    }

    document.getElementById('gameMode').textContent = selectedGameMode
    document.getElementById('bots').textContent = selectedBots
    document.getElementById('health').textContent = selectedHealth
    document.getElementById('score').textContent = selectedScoreLimit
    document.getElementById('veteran').textContent = selectedVeteranMode
    document.getElementById('healthrecovery').textContent = selectedHealthRecovery
    document.getElementById('timespawn').textContent = selectedTimeSpawn
}
