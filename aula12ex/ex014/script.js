function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        console.log('Bom dia!')
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        console.log('Boa tarde!')
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        console.log('Boa noite!')
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    
}