// Seleciona os elementos principais do menu
const botaoMenuMobile = document.getElementById('botao-menu-mobile');
const navegacaoSite = document.getElementById('navegacao-site');
const camadaDesfoqueMenu = document.getElementById('camada-desfoque-menu');

// Evento de clique no botão do menu (hambúrguer)
botaoMenuMobile.addEventListener('click', () => {

    // Alterna a classe "ativo" para abrir/fechar o menu
    navegacaoSite.classList.toggle('ativo');

    // Ativa ou desativa o overlay (fundo com blur)
    camadaDesfoqueMenu.classList.toggle('ativo');

    // Altera o ícone do botão entre "menu" e "close"
    if (navegacaoSite.classList.contains('ativo')) {
        botaoMenuMobile.textContent = 'close';
    } else {
        botaoMenuMobile.textContent = 'menu';
    }
});

// Fecha o menu ao clicar fora (no overlay)
camadaDesfoqueMenu.addEventListener('click', () => {
    navegacaoSite.classList.remove('ativo');
    camadaDesfoqueMenu.classList.remove('ativo');
    botaoMenuMobile.textContent = 'menu';
});

// Fecha o menu automaticamente ao clicar em um item

const linksDaListaNavegacao = document.querySelectorAll('.lista-navegacao a');

linksDaListaNavegacao.forEach((link) => {
    link.addEventListener('click', () => {
        navegacaoSite.classList.remove('ativo');
        camadaDesfoqueMenu.classList.remove('ativo');
        botaoMenuMobile.textContent = 'menu';
    });
});