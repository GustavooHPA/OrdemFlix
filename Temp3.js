function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    var iframe = window.document.getElementById("iframe")
    

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/b7PvLWZR6pg")
        h1.innerHTML = "Ordo Realitas"
    } else if (seletor == 2) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/NWcpezJHlb8")
        h1.innerHTML = "Sangue"
    } else if (seletor == 3) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/NDq5ETNosdA")
        h1.innerHTML = "Transcender"
    } else if (seletor == 4) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/sn4B_3KyzYw")
        h1.innerHTML = "Orfanato"
    } else if (seletor == 5) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/3XoyEwGk_MA")
        h1.innerHTML = "Escriptas"
    } else if (seletor == 6) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/LepK245_uUw")
        h1.innerHTML = "Elizabeth"
    } else if (seletor == 7) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/Bi0KoBhpeCw")
        h1.innerHTML = "Anfitrião"
    } else if (seletor == 8) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/mrJvp64_tL4")
        h1.innerHTML = "Reunião"
    } else if (seletor == 9) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/N0jF0svrc7w")
        h1.innerHTML = "Mansão Endiabrada"
    } else if (seletor == 10) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/epdl81SKm6o")
        h1.innerHTML = "Fotografias"
    } else if (seletor == 11) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/lkjp80bSj2g")
        h1.innerHTML = "Lembrar"
    } else if (seletor == 12) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/7Nticvm0PbM")
        h1.innerHTML = "Mudanças"
    } else if (seletor == 13) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/e7UDrn-wDks")
        h1.innerHTML = "Bruxa Arrependida"
    } else if (seletor == 14) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/g9i8d-bSWRA")
        h1.innerHTML = "O Espreitador"
    } else if (seletor == 15) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/ta4x_cV5OJw")
        h1.innerHTML = "Divina Comédia"
    } else if (seletor == 16) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/kqF7svnqhy0")
        h1.innerHTML = "Melodia"
    } else if (seletor == 17) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/nAqPmCAuWxo")
        h1.innerHTML = "Sacrifício"
    } else if (seletor == 18) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/ZEpMspaVfDw")
        h1.innerHTML = "Enpap"
    } else if (seletor == 19) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/reGd6QjPc9s")
        h1.innerHTML = "Tirigan"
    } else if (seletor == 20) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/oTCZaA_cHcs")
        h1.innerHTML = "Kian (FINAL)"
    }
} 

