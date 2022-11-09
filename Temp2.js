var iframe = window.document.getElementById("iframe")

function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    
    

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/23z-tCHgMGI")
        h1.innerHTML = "Equipe Kelvin"
    } else if (seletor == 2) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/sq37bBDs8vk")
        h1.innerHTML = "O Sanatório"
    } else if (seletor == 3) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/qzUD-387XhM")
        h1.innerHTML = "Aracnofobia"
    } else if (seletor == 4) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/NhhnGF1Lpx4")
        h1.innerHTML = "Despedida"
    } else if (seletor == 5) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/mtXiwMX0K-c")
        h1.innerHTML = "A Casa"
    } else if (seletor == 6) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/03Led-EYcA8")
        h1.innerHTML = "Virgulino"
    } else if (seletor == 7) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/VldAD6_DMgw")
        h1.innerHTML = "Cemitério"
    } else if (seletor == 8) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/gYdRp7eohyQ")
        h1.innerHTML = "O Segredo"
    } else if (seletor == 9) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/En2JC9n66bo")
        h1.innerHTML = "Santo Berço"
    } else if (seletor == 10) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/ZCY9Ez6gzfY")
        h1.innerHTML = "Hotel"
    } else if (seletor == 11) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/lPEH0PmDA9M")
        h1.innerHTML = "Símbolo"
    } else if (seletor == 12) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/Rjkt4KpNpBM")
        h1.innerHTML = "Torre"
    } else if (seletor == 13) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/cOTLH2R_iiE")
        h1.innerHTML = "A Caverna"
    } else if (seletor == 14) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/jVJkjOOFIyw")
        h1.innerHTML = "A Porta"
    } else if (seletor == 15) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/o6_N14zB80s")
        h1.innerHTML = "Manancial"
    } else if (seletor == 16) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/BH-yFQo882w")
        h1.innerHTML = "Equipe E (FINAL)"
    }
} 

