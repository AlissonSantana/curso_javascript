function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')   
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genêro = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'fotobebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'hoAdulto.png')
            } else {
                img.setAttribute('src', 'hidoso.png')
            }
        } else if(fsex[1].checked) {
            genêro = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'fotobebemulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mAdulta.png')
            } else {
                img.setAttribute('src', 'mIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genêro} com idade ${idade} anos`
        res.appendChild(img)
    }
}