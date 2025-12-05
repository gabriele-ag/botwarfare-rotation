const gameModes = [
    "Tutti contro Tutti",
    "Deathmatch a Squadre",
    "Cattura la bandiera",
    "Dominio",
    "Uccisione confermata",
]

const mapsMW2 = [
    "Crossfire",
    "Terminal",
    "Dome",
    "Rust",
]

const botsMin = 5
const botsMax = 11

const scoreLimits = [150, 200, 300]

const health = [
    "Normale (100%)",
    "Difficile (75%)",
    "Estremo (50%)",
    "Doppia Vita (200%)"
]

const veteran = [1, 0]

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
    const selectedMap = getRandomItem(mapsMW2)
    const selectedBots = getRandomInt(botsMin, botsMax)
    const selectedHealth = getRandomItem(health)
    const selectedScoreLimit = getRandomItem(scoreLimits)

    document.getElementById('gameMode').textContent = selectedGameMode
    document.getElementById('bots').textContent = selectedBots
    document.getElementById('map').textContent = selectedMap
    document.getElementById('health').textContent = selectedHealth
    document.getElementById('score').textContent = selectedScoreLimit
}

const randomizeButton = document.getElementById('randomizeButton');
randomizeButton.addEventListener('click', randomizeSettings);