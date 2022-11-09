function Clicar () {
    var h1 = window.document.getElementById("Título")

    var select = window.document.getElementById("Seletor")
    var seletor = select.options[select.selectedIndex].value;
    console.log(seletor)

    var iframe = window.document.getElementById("iframe")
    

    if (seletor == 0) {
        window.alert("Selecione um episódio!")
    } else if (seletor == 1) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/Pf4HzTdA2WE")
        h1.innerHTML = "Tipora"
    } else if (seletor == 2) {
        window.alert("Infelizmente este vídeo está com restrição de idade no youtube e não poderá ser mostrado por aqui, mas não se preocupe, ao clicar em OK você será redirecionado para este episódio no youtube :D")
        h1.innerHTML = "Praia"
        window.open("https://youtu.be/wiGlOf3mCVM", "Praia")
    } else if (seletor == 3) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/hxhsZeREpok")
        h1.innerHTML = "Pavor"
    } else if (seletor == 4) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/b0Rr9RPUnQ4")
        h1.innerHTML = "Pesadelo"
    } else if (seletor == 5) {
        window.alert("Infelizmente este vídeo está com restrição de idade no youtube e não poderá ser mostrado por aqui, mas não se preocupe, ao clicar em OK você será redirecionado para este episódio no youtube :D")
        h1.innerHTML = "Penhasco"
        window.open("https://youtu.be/6yHpP3dsaws", "Penhasco")
    } else if (seletor == 6) {
        window.alert("Infelizmente este vídeo está com restrição de idade no youtube e não poderá ser mostrado por aqui, mas não se preocupe, ao clicar em OK você será redirecionado para este episódio no youtube :D")
        h1.innerHTML = "Profecia"
        window.open("https://youtu.be/-ucsTx0u4Lo", "Profecia")
    } else if (seletor == 7) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/pVTvxcBJzzU")
        h1.innerHTML = "Prosopagnosia"
    } else if (seletor == 8) {
        iframe.setAttribute("src", "https://www.youtube.com/embed/jo426LkONNc")
        h1.innerHTML = "Florence (FINAL)"
    }
} 

