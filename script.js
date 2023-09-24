document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            nome:'img1',
            img: "imagens/imagen1.png",
        },
        {
            nome:'img2',
            img: "imagens/imagen2.png",
        },
        {
            nome:'img3',
            img: "imagens/img3.png",
        },
        {
            nome:'img4',
            img: "imagens/img4.png",
        },
        {
            nome:'img5',
            img: "imagens/img5.png",
        },
        {
            nome:'img6',
            img: "imagens/img6.png",
        },
        {
            nome:'img1',
            img: "imagens/imagen1.png",
        },
        {
            nome:'img2',
            img: "imagens/imagen2.png",
        },
        {
            nome:'img3',
            img: "imagens/img3.png",
        },
        {
            nome:'img4',
            img: "imagens/img4.png",
        },
        {
            nome:'img5',
            img: "imagens/img5.png",
        },
        {
            nome:'img6',
            img: "imagens/img6.png",
        }
    ]

    cards.sort(() => 0.5 - Math.random()) //embaralhar
    const board = document.querySelector('.board')
    const result = document.querySelector('#result')
    let cartasEscolhidas = []
    let cartasId = []
    let combinacao = []

    function criarJogo() {
        for (let i = 0; i < cards.length; i++){
            const carta = document.createElement('img')
            carta.setAttribute('src', 'imagens/fundo.png.jpg')
            carta.setAttribute('data-id', i)
            carta.addEventListener('click', virarCarta )
            board.appendChild(carta)
            carta.width = 150
            carta.height = 150
        }
    }

    function checar() {
        const cards = document.querySelectorAll('img')
        const idOpt1 = cartasId[0]
        const idOpt2 = cartasId[1]

        //clicks na mesma imagem
        if(idOpt1 == idOpt2){
            cards[idOpt1].setAttribute('src', 'imagens/fundo.png.jpg')
            cards[idOpt2].setAttribute('src', 'imagens/fundo.png.jpg')
            alert('Você clicou na mesma imagem')

        } 
        
        else if (cartasEscolhidas[0] === cartasEscolhidas[1]){
            
            cards[idOpt1].setAttribute('src', 'imagens/check.png')
            cards[idOpt2].setAttribute('src', 'imagens/check.png')
            cards[idOpt1].removeEventListener('click', virarCarta)
            cards[idOpt2].removeEventListener('click', virarCarta)
            combinacao.push(cartasEscolhidas)
            alert('Você encontrou uma combinação')
            
        } else {
            cards[idOpt1].setAttribute('src', 'imagens/fundo.png.jpg')
            cards[idOpt2].setAttribute('src', 'imagens/fundo.png.jpg')
            alert('Combinação errada')
        }
        cartasEscolhidas= []
        cartasId = []

    }

    function virarCarta(){
        let idCarta = this.getAttribute('data-id')
        cartasEscolhidas.push(cards[idCarta].nome)
        cartasId.push(idCarta)
        this.setAttribute('src', cards[idCarta].img)
        if (cartasEscolhidas.length === 2){
            setTimeout(checar, 500)
        }
    }


    criarJogo()

} );