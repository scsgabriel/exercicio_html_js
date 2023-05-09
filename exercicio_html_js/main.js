const form = document.getElementById('form-number');

function validaNumero (campoA, campoB){
    return campoB > campoA;
}

formValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    let campoA = parseInt(document.getElementById('campo-a').value);
    let campoB = parseInt(document.getElementById('campo-b').value);

    const mensagemSucesso = 'Excelente! O número no campo B é maior.'; //string na mensagem de sucesso
    const mensagemErro = 'O número no campo A é maior que o número do Campo B, refaça a operação.'; //string na mensagem de erro

    formValido = validaNumero(campoA, campoB);
    if (formValido){
        const containerMensagemSucesso = document.querySelector('.feedback-true');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    } else {
        const containerMensagemSucesso = document.querySelector('.feedback-false');
        containerMensagemSucesso.innerHTML = mensagemErro;
        containerMensagemSucesso.style.display = 'block';
    }
})

const campoA = document.getElementById('campo-a');
const containerMensagemSucesso = document.querySelector('.feedback-true');
    campoA.addEventListener('input', function() {
        containerMensagemSucesso.style.display = 'none';
    });

const campoB = document.getElementById('campo-b');
const containerMensagemErro = document.querySelector('.feedback-false');
    campoB.addEventListener('input', function() {
        containerMensagemErro.style.display = 'none';
    });

   

    
