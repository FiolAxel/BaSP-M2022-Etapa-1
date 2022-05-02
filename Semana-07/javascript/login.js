var boton = document.getElementById('continue-button');
var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');
var validationResultsLogin = document.getElementsByClassName('login-validation-result');
var loginUrl = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

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
    if (password.length <= 7) {
        return false;
    } 
    
    for (i = 0; i < password.length ; i++) {
        if (charIsLetter(password[i])) {
            hasLetters = true;
        }
        else {
            if(!isNaN(password[i])) {
                hasNumbers = true;
            }
        }
        if (!charIsLetter(password[i]) && isNaN(password[i])) {
            return false;
        }
    }
    if (hasLetters && hasNumbers) {
        return true;
    }
}

inputEmail.addEventListener('blur', function() {
    valorEmail = document.getElementById('email').value;

    if (validateEmail(valorEmail) === null){
        document.getElementById('email-error-msg').style.display = 'block';
        inputEmail.style.backgroundColor = '#ffbdbd';
        inputEmail.style.border = '1px solid red';
    }
    else {
        document.getElementById('email-error-msg').style.display = 'none';
        inputEmail.style.backgroundColor = 'transparent';
        inputEmail.style.border = '1px solid black';
    }

});

inputEmail.addEventListener('focus', function() {
    document.getElementById('email-error-msg').style.display = 'none';
    inputEmail.style.backgroundColor = 'transparent';
    inputEmail.style.border = '1px solid black';
});

inputPassword.addEventListener('blur', function() {
    valorPassword = document.getElementById('password').value;

    if (!validatePassword(valorPassword)) {
        document.getElementById('password-error-msg').style.display = 'block';
        inputPassword.style.backgroundColor = '#ffbdbd';
        inputPassword.style.border = '1px solid red';
    }
    else {
        document.getElementById('password-error-msg').style.display = 'none';
        inputPassword.style.backgroundColor = 'transparent';
        inputPassword.style.border = '1px solid black';
    }
});

inputPassword.addEventListener('focus', function() {
    document.getElementById('password-error-msg').style.display = 'none';
    inputPassword.style.backgroundColor = 'transparent';
    inputPassword.style.border = '1px solid black';
});

validationBoxS = document.getElementById('login-validation');

boton.addEventListener('click', function() {
    valorEmail = document.getElementById('email').value;
    valorPassword = document.getElementById('password').value;
    validationBoxS.style.display = 'flex';
    validationBoxS.scrollIntoView(true);
    var doFetch = true;
    if (!validateEmail(valorEmail)) {
        validationResultsLogin[0].textContent = 'Invalid email';
        validationResultsLogin[0].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsLogin[0].textContent = `Email: ${valorEmail}`;
        validationResultsLogin[0].style.color = 'green';
    }
    if (!validatePassword(valorPassword)) {
        validationResultsLogin[1].textContent = 'Invalid password';
        validationResultsLogin[1].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsLogin[1].textContent = `Password: ${valorPassword}`;
        validationResultsLogin[1].style.color = 'green';
    }

    if (doFetch) {
        fetch(`${loginUrl}?email=${valorEmail}&password=${valorPassword}`)
            .then(res => res.json())
            .then(loginStatus => {
                alert( 'Success: ' + loginStatus.success + '. \nMessage: ' + loginStatus.msg);
            })
            .catch(e => console.log(e));
    }

});