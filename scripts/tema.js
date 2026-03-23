// Seleciona o botão de tema e o body
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

// Verifica se o botão existe antes de adicionar o evento
if (botaoTema) {
    botaoTema.addEventListener('click', () => {
        // Verifica se o modo escuro está ativo
        body.classList.toggle('tema-escuro');

        if (body.classList.contains('tema-escuro')) {
            // Se estiver no modo escuro, mostra o ícone de sol
            botaoTema.textContent = 'light_mode';
        } else {
            // Se estiver no modo claro, mostra o ícone de lua
            botaoTema.textContent = 'dark_mode';
        }
    });
}