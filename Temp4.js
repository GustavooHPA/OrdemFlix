function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    var iframe = window.document.getElementById("iframe")
    

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/d7TleOmBKg4")
        h1.innerHTML = "Episódio 0 - Ordem Paranormal Calamidade"
    } else if (seletor == 2) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/TRSlNehdWzs")
        h1.innerHTML = "O Começo do Fim"
    } else if (seletor == 3) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/YN4QATSyahs")
        h1.innerHTML = "Vingança"
    } else if (seletor == 4) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/P6Bc3pJ1qrY")
        h1.innerHTML = "Pacto"
    } else if (seletor == 5) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/OsWeJVcojjg")
        h1.innerHTML = "Anfiteatro"
    } else if (seletor == 6) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/2sxn1WyqMq0")
        h1.innerHTML = "Ordo Calamitas"
    } else if (seletor == 7) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/ev5YLg7AJqY")
        h1.innerHTML = "Jogos"
    } else if (seletor == 8) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/VtElALnxnF0")
        h1.innerHTML = "Traição"
    } else if (seletor == 9) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/Dh1sYN68vOE")
        h1.innerHTML = "Escolha"
    } else if (seletor == 10) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/dcYEBL45Pdw")
        h1.innerHTML = "Síntese"
    } else if (seletor == 11) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/gxjhNekQ0l4")
        h1.innerHTML = "Tempo"
    } else if (seletor == 12) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/9TGMsocV_bw")
        h1.innerHTML = "Guerreiro"
    } else if (seletor == 13) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/tdb8jng7qwQ")
        h1.innerHTML = "Olhos (FINAL)"
    }
} 

