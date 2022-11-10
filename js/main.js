const $initialScreen = document.querySelector('.initialScreen')
const $searchingScreen = document.querySelector('.searchingScreen')

const $cepInput = document.querySelector('#cepInput')
const $searchBtn = document.querySelector('#searchBtn')

$searchBtn.onclick = e => {
    e.preventDefault()

    $initialScreen.style.display = 'none'
    $searchingScreen.style.display = 'block'
}