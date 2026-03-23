// Seleção dos elementos do formulário
const formularioContato = document.getElementById('formulario-contato');
const campoNome = document.getElementById('campo-nome');
const campoEmail = document.getElementById('campo-email');
const campoMensagem = document.getElementById('campo-mensagem');

// Seleção de erro
const erroCampoNome = document.getElementById('erro-campo-nome');
const erroCampoEmail = document.getElementById('erro-campo-email');
const erroCampoMensagem = document.getElementById('erro-campo-mensagem');

// Área que mostra o status do envio
const mensagemStatusFormulario = document.getElementById('mensagem-status-formulario');


// Validação de e-mail
function validarEmail(valorEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail);
}


// Função para limpar todas as mensagens de erro antes de validar novamente
function limparMensagensDeErro() {
    erroCampoNome.textContent = '';
    erroCampoEmail.textContent = '';
    erroCampoMensagem.textContent = '';
    mensagemStatusFormulario.textContent = '';
}


// Evento de envio do formulário
formularioContato.addEventListener('submit', function (evento) {

    // Impede o envio real do formulário (não recarrega a página)
    evento.preventDefault();

    // Limpa erros anteriores
    limparMensagensDeErro();

    let formularioEstaValido = true;

    // Validação do campo nome
    if (campoNome.value.trim() === '') {
        erroCampoNome.textContent = 'Por favor, preencha seu nome.';
        formularioEstaValido = false;
    }

    // Validação do campo e-mail
    if (campoEmail.value.trim() === '') {
        erroCampoEmail.textContent = 'Por favor, preencha seu e-mail.';
        formularioEstaValido = false;
    } 
    // Verifica se o e-mail é válido
    else if (!validarEmail(campoEmail.value.trim())) {
        erroCampoEmail.textContent = 'Digite um e-mail válido.';
        formularioEstaValido = false;
    }

    // Validação do campo de mensagem
    if (campoMensagem.value.trim() === '') {
        erroCampoMensagem.textContent = 'Por favor, escreva sua mensagem.';
        formularioEstaValido = false;
    }

    // Se algum campo estiver inválido, ele para o envio
    if (!formularioEstaValido) {
        return;
    }

    mensagemStatusFormulario.textContent = 'Enviando mensagem...';
    setTimeout(() => {
        mensagemStatusFormulario.textContent = 'Mensagem enviada com sucesso!';
        formularioContato.reset();
    }, 1500);
});