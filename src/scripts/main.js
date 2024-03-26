document.addEventListener('DOMContentLoaded', function() {   //ve quando Dom terminou de carregar
    

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;  //pega a posição atual do scroll

        if (posicaoAtual < alturahero) {  //quando posiçao atual menor que altura hero ele oculta//
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader(); // se nao exibe
        }
    })

function ocultaElementosDoHeader() {
    const header = document.querySelector('header'); // oculta no header 
    header.classList.add('header--is-hidden'); // classe a ser oculta
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

})
