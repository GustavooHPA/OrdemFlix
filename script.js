var body = window.document.getElementById("Menu")
var menu = window.document.getElementById("menuaberto")

var abrir = window.document.getElementById("Abrir")
var fechar = window.document.getElementById("Fechar")

function AbrirMenu () {
    body.classList.remove("SemMenu")
    body.classList.add("FecharMenu")
}

function FecharMenu () {
    body.classList.remove("FecharMenu")
    body.classList.add("SemMenu")
}