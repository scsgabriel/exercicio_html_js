const form = document.getElementById('page-deposito');

const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) { //essa function vai ser true or false, depende do retorno do length
    const nomeComoArray = nomeCompleto.split(' '); // split é um separador (separei usando espaço)
    return nomeComoArray.length >= 2; //length = quantidade de elementos de um array (o nome é válido se tiver 2 ou mais elementos)
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //preventDefault cancela o efeito do evento, nesse caso o efeito do submit é o reload da page

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-dp');
    
    const mensagemSucesso = `O montade de: <b>${valorDeposito.value}</b> foi depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;


    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message'); //acessei o css
        containerMensagemSucesso.innerHTML = mensagemSucesso; //innerHTML trouxe o conteúdo do mensagemSucesso pro HTML 
        containerMensagemSucesso.style.display = 'block'; // o style é usado pra alterar o CSS

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = ''; 
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.style.border = '2px solid red';
        document.querySelector('.error-message').style.display = "block";
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) { // o KEYUP é um evento que mostra as alterações feitas em tempo real
    console.log(e.target.value); // no "e" eu quero acessar o TARGET, no TARGET eu quero acessar o VALUE e ver o que tem lá
    formEValido = validaNome(e.target.value);

    if(!formEValido){
        nomeBeneficiario.style.border = '2px solid red';
        document.querySelector('.error-message').style.display = "block";
    } else {
        nomeBeneficiario.style.border = '';
        /* o valor de BORDER está vazio entre aspas simples pra que não haja estilização em cima da borda do campo nome do beneficiário..
        se eu colocar "NONE" a borda some, aí da errado */
        document.querySelector('.error-message').style.display = "none";
    }
});
