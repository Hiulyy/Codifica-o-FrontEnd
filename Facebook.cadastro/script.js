
function cadastrar (){

    const nomeProprio = document.getElementById("nome-proprio")
    const nascimento = document.getElementById("nascimento")
    const genero = document.querySelector("#genero")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const nomeproprioValue = nomeProprio.value;
    const apelidoValue = apelido.value;
    const generoValue = genero.value;
    const emailValue = email.value;
    const nascimentoValue = nascimento.value;
    const senhaValue = senha.value;

    if(nomeproprioValue === "")
    nomeProprio.style.borderColor ="red"
    return
}else{
    nomeProprio.style.borderColor =""
}

if(apelidoValue === ""){
    nomeProprio.style.borderColor ="red"
}