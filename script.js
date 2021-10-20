function compra(){
    let cartao = document.querySelector('.cartao').value
    let card = cartao.slice(-4)
    let cardMask =card.padStart(16, "*")
    document.querySelector('.campo').innerHTML = `Confirme se este é o final do seu Cartão: <span>${cardMask}</span>`

}