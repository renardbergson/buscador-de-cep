const $initialScreen = document.querySelector('.initialScreen')
const $searchingScreen = document.querySelector('.searchingScreen')

const $cepInput = document.querySelector('#cepInput')
const $searchBtn = document.querySelector('#searchBtn')
const $toast = document.querySelector('.toast')

$searchBtn.onclick = e => {
    e.preventDefault()

    if ($cepInput.length !== 8) {
        $toast.classList.add('visible')

        setTimeout(() => {
            $toast.classList.remove('visible')
        }, 2000)
        
        return
    }

    $initialScreen.style.display = 'none'
    $searchingScreen.style.display = 'block'
}