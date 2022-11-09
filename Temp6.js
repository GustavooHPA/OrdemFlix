function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    var iframe = window.document.getElementById("iframe")
    

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/k5y48mQTdpE")
        h1.innerHTML = "Alheios"
    }
} 

