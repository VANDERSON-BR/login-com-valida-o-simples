const password = document.getElementById("password");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const length = document.getElementById("length");

//aparece mensagem
password.onfocus = function (){
    document.getElementById("message").style.display = "block";
}

//desaparece mensagem
password.onblur = function (){
    document.getElementById("message").style.display = "none";
}

//verificação a cada vez que o usuário usa o teclado
password.onkeyup = function(event){
    validatePassword();
}

function validatePassword(){
    const lowerCaseLetters = /[a-z]/;

    if(password.value.match(lowerCaseLetters)){
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    const upperCaseLetters = /[A-Z]/;

    if(password.value.match(upperCaseLetters)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else { 
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

    const numbers = /[0-9]/;

    if(password.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(password.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

//verificação ao cliclar no submit
const form = document.querySelector("form");

form.onsubmit = function (event){
    const lowerCaseLetters = /[a-z]/;
    const upperCaseLetters = /[A-Z]/;
    const numbers = /[0-9]/;

    const hasLowerCase = password.value.match(lowerCaseLetters);
    const hasUpperCase = password.value.match(upperCaseLetters);
    const hasNumber = password.value.match(numbers);
    const hasLength = password.value.length >= 8;

    if(!hasLowerCase || !hasUpperCase || !hasNumber || !hasLength){
        event.preventDefault();  // Bloqueio de envio
        window.alert("Por favor, preencha a senha corretamente seguindo todos os requisitos!");
        document.getElementById("message").style.display = "block";
        return false;
    } 

    return true; 
};