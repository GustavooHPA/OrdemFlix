var iframe = window.document.getElementById("iframe")

function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/uplnCYc0fDg")
        h1.innerHTML = "Episódio 1"
    } else if (seletor == 2) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/4Ud5QQ2IEgU")
        h1.innerHTML = "Episódio 2"
    } else if (seletor == 3) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/dtcsHSAEik8")
        h1.innerHTML = "Episódio 3 (FINAL)"
    }
}

