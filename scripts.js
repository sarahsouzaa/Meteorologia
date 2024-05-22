
let key = "b7feec234b8bc1b59a978a70f5a57ee2"

function displayDados(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscar(cidade){
    
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    displayDados(dados)
}

function clique() {
    let cidade = document.querySelector(".input-cidade").value
    buscar(cidade)
    console.log(cidade)

}