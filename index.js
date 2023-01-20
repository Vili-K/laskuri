//document.getElementById("laskuri-el").innerText = 5
let nimi = "Jorma"
let tervehdys = "Tervetuloa "
let laskuri = 0 
let tallennus = "Aiemmat: "
document.getElementById
let tervehdyskutsu = document.getElementById("tervehdys-el")
console.log(tervehdys+nimi)
tervehdyskutsu.innerText=tervehdys+nimi
let kutsuttutallennus = document.getElementById("tallennus-el")
kutsuttutallennus.innerText = tallennus

function plus(){
    laskuri = laskuri + 1
    document.getElementById("laskuri-el").innerText = laskuri
}

function miinus(){
    laskuri = laskuri - 1
    document.getElementById("laskuri-el").innerText = laskuri
}

function tallenna(){
    console.log(laskuri)
    let lisaaperaan = " - " + laskuri
    tallennus = tallennus + lisaaperaan
    kutsuttutallennus.innerText = tallennus
    laskuri = laskuri - laskuri
    document.getElementById("laskuri-el").innerText = laskuri
}

function nollaa(){
    document.getElementById("tallennus-el").innerText = "Aiemmat: "
    tallennus = "Aiemmat: "
}