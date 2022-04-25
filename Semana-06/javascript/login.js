var boton = document.getElementById('continue-button');
var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
}

function validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePassword(password) {
    var hasLetters = false;
    var hasNumbers = false;
    for(i = 0; i < password.length ; i++){
        if (charIsLetter(password[i])){
            hasLetters = true;
        }
        else{
            if(!isNaN(password[i])){
                hasNumbers = true;
            }
        }
        if(!charIsLetter(password[i]) && isNaN(password[i])){
            // si no es una letra y no es numero entonces es un simbolo. Error en el pw.
            return false;
        }
    }
    if (hasLetters && hasNumbers){
        return true;
    }
}

inputEmail.addEventListener('blur', function(){
    // aca validar el email
    console.log('blur del email (pierde focus)');
    valorEmail = document.getElementById('email').value;

    if (validateEmail(valorEmail) === null){
        document.getElementById('email-error-msg').style.display = 'block';
        inputEmail.style.backgroundColor = '#ffbdbd';
        inputEmail.style.border = '1px solid red';
    }
    else{
        document.getElementById('email-error-msg').style.display = 'none';
        inputEmail.style.backgroundColor = 'transparent';
        inputEmail.style.border = '1px solid black';
    }

});

inputEmail.addEventListener('focus', function(){
    document.getElementById('email-error-msg').style.display = 'none';
    inputEmail.style.backgroundColor = 'transparent';
    inputEmail.style.border = '1px solid black';
});

inputPassword.addEventListener('blur', function(){
    // aca validas el password

    console.log('blur del password (pierde focus)');
    valorPassword = document.getElementById('password').value;

    if (!validatePassword(valorPassword)){
        document.getElementById('password-error-msg').style.display = 'block';
        inputPassword.style.backgroundColor = '#ffbdbd';
        inputPassword.style.border = '1px solid red';
    }
    else{
        document.getElementById('password-error-msg').style.display = 'none';
        inputPassword.style.backgroundColor = 'transparent';
        inputPassword.style.border = '1px solid black';
    }
});

inputPassword.addEventListener('focus', function(){
    document.getElementById('password-error-msg').style.display = 'none';
    inputPassword.style.backgroundColor = 'transparent';
    inputPassword.style.border = '1px solid black';
});


boton.addEventListener('click', function(){
    console.log('click en el boton del login');
});

