const $initialScreen = document.querySelector('.initialScreen')
const $cepInput = document.querySelector('#cepInput')
const $searchBtn = document.querySelector('#searchBtn')
const $toast = document.querySelector('.toast')

const $searchingScreen = document.querySelector('.searchingScreen')

const $resultScreen = document.querySelector('.resultScreen')
const $cepOutputs = document.querySelectorAll('.cepOutput')
const $resultReturn = document.querySelector('#resultReturn')


const $errorScreen = document.querySelector('.errorScreen')
const $errorReturn = document.querySelector('#errorReturn')

$searchBtn.onclick = e => {
    e.preventDefault()
 
    const cepLength = $cepInput.value.length

    if (cepLength !== 8) {
        $toast.classList.add('visible')

        setTimeout(() => {
            $toast.classList.remove('visible')
        }, 2000)
        
        return
    }

    request()
}

function request() {
    $initialScreen.style.display = 'none'
    $searchingScreen.style.display = 'block'
    
    const cep = $cepInput.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(getResponse)
    .then(dataShow)
    .catch(error)
}

function getResponse(response) {
    if (response.status === 200) {
        return response.json()
    }
}

function dataShow(data) { 
    if (data.cep != undefined) {
        setTimeout(() => {
            $searchingScreen.style.display = 'none'
            $resultScreen.style.display = 'block'

            $cepOutputs.item(0).innerHTML = `CEP: ${data.cep}` 
            $cepOutputs.item(1).innerHTML = `Localidade: ${data.localidade} - ${data.uf}`

            if (data.bairro = ' ') {
                $cepOutputs.item(2).innerHTML = 'Bairro: Centro'
            } else {
                $cepOutputs.item(2).innerHTML = `Bairro: ${data.bairro}`
            }

            if (data.logradouro = ' ') {
                $cepOutputs.item(3).innerHTML = ' '
            } else {
                $cepOutputs.item(3).innerHTML = data.logradouro
            }

            $cepOutputs.item(4).innerHTML = `IBGE: ${data.ibge}` 
            $cepOutputs.item(5).innerHTML = `DDD: ${data.ddd}`
        }, 3000)
    } else {
        error()
    }
}

function error() {
    setTimeout(() => {
        $searchingScreen.style.display = 'none'
        $errorScreen.style.display = 'block'
        $cepInput.value = ''
    }, 3000)
}

$resultReturn.onclick = () => {
    $resultScreen.style.display = 'none'
    $initialScreen.style.display = 'block'
    $cepInput.value = ''
}

$errorReturn.onclick = () => {
    $errorScreen.style.display = 'none'
    $initialScreen.style.display = 'block'
}