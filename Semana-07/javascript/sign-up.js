var nameInputSignup = document.querySelector('input[name="signup-name"]');
var lastnameInputSignup = document.querySelector('input[name="lastname"]');
var dniInputSignup = document.querySelector('input[name="dni"]');
var dateInputSignup = document.querySelector('input[name="date-of-birth"]');
var telInputSignup = document.querySelector('input[name="tel"]');
var addressInputSignup = document.querySelector('input[name="address"]');
var locationInputSignup = document.querySelector('input[name="location"]');
var postalCodeInputSignup = document.querySelector('input[name="postal-code"]');
var emailInputSignup = document.querySelector('input[name="signup-email"]');
var passwordInputSignup = document.querySelector('input[name="password"]');
var repeatPasswordInputSignup = document.querySelector('input[name="repeat-password"]');
var signupErrors = document.getElementsByClassName('signup-error');
var submitInputSignup = document.querySelector('input[type="submit"]');
var validationResultsSignup = document.getElementsByClassName('signup-validation-result');
var signupUrl = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

nameInputSignup.addEventListener('blur', validateName);

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
}

function validateName() {
    for (i = 0; i < nameInputSignup.value.length ; i++) {
        if (!charIsLetter(nameInputSignup.value[i])) {
            signupErrors[0].style.display = 'inherit';
            signupErrors[0].textContent = '* must contain ONLY letters';
            nameInputSignup.style.border = '2px solid red';
            return true;
        }
    }
    if (nameInputSignup.value.length < 3) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = '* must contain at least 3 caracters';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(nameInputSignup)) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = '* cant contain numbers';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }
}

nameInputSignup.addEventListener('focus', function() {
    signupErrors[0].style.display = 'none';
})

lastnameInputSignup.addEventListener('blur', validateLastname);

function validateLastname() {
    for (i = 0; i < lastnameInputSignup.value.length ; i++) {
        if (!charIsLetter(lastnameInputSignup.value[i])) {
            signupErrors[1].style.display = 'inherit';
            signupErrors[1].textContent = '* must contain ONLY letters';
            lastnameInputSignup.style.border = '2px solid red';
            return true;
        }
    }
    if (lastnameInputSignup.value.length < 3) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = '* must contain at least 3 caracters';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(lastnameInputSignup)) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = '* cant contain numbers';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }
}

lastnameInputSignup.addEventListener('focus', function() {
    signupErrors[1].style.display = 'none';
})

dniInputSignup.addEventListener('blur', validateDNI)

function validateDNI() {
    if (dniInputSignup.value.length == 7 || dniInputSignup.value.length == 8) {
        dniInputSignup.style.border = '2px solid green';
    }
    else {
        signupErrors[2].style.display = 'inherit';
        signupErrors[2].textContent = '* must be 7 or 8 numbers long';
        dniInputSignup.style.border = '2px solid red';
        return true;
    }
    if (isNaN(dniInputSignup.value)) {
        signupErrors[2].style.display = 'inherit';
        signupErrors[2].textContent = '* must be 7 or 8 numbers long';
        dniInputSignup.style.border = '2px solid red';
        return true;
    }
}

dniInputSignup.addEventListener('focus', function() {
    signupErrors[2].style.display = 'none';
})

dateInputSignup.addEventListener('blur', validateDate);

function validateAge(birthDate) {
    var today = new Date();
    var birtday = new Date(birthDate);
    var age = today.getFullYear() - birtday.getFullYear();
    var month = today.getMonth() - birtday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birtday.getDate())) {
        age--;
    }
    return age
}

function validateDate() {
    if (validateAge(dateInputSignup.value) < 18) {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* you need to be 18 or older';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        dateInputSignup.style.border = '2px solid green';
    }

    if (dateInputSignup.value == '') {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* this field is required';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
}

dateInputSignup.addEventListener('focus', function() {
    signupErrors[3].style.display = 'none';
})

telInputSignup.addEventListener('blur', validateTel);

function validateTel() {
    if (telInputSignup.value.length !== 10) {
        signupErrors[4].style.display = 'inherit';
        signupErrors[4].textContent = '* phone number must have 10 numbers';
        telInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        telInputSignup.style.border = '2px solid green';
    }
}

telInputSignup.addEventListener('focus', function() {
    signupErrors[4].style.display = 'none';
})

addressInputSignup.addEventListener('blur', validateAddress);


function validateAddress() {
    if (addressInputSignup.value.length < 5) {
        signupErrors[5].style.display = 'inherit';
        signupErrors[5].textContent = '* address must contain 5 caracters';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else if (!validation2(addressInputSignup)) {
        signupErrors[5].style.display = 'inherit';
        signupErrors[5].textContent = '* address must contain letters and numbers and a space';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        addressInputSignup.style.border = '2px solid green';
    }
}

addressInputSignup.addEventListener('focus', function() {
    signupErrors[5].style.display = 'none';
})

locationInputSignup.addEventListener('blur', validateLocation);

function validateLocation() {
    for (i = 0; i < locationInputSignup.value.length ; i++) {
        if (!charIsLetter(locationInputSignup.value[i])) {
            signupErrors[6].style.display = 'inherit';
            signupErrors[6].textContent = '* must contain ONLY letters';
            locationInputSignup.style.border = '2px solid red';
            return true;
        }
    }
    if (locationInputSignup.value.length < 4) {
        signupErrors[6].style.display = 'inherit';
        signupErrors[6].textContent = '* must contain more than 3 caracters';
        locationInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        locationInputSignup.style.border = '2px solid green';
    }
}

locationInputSignup.addEventListener('focus', function() {
    signupErrors[6].style.display = 'none';
})

postalCodeInputSignup.addEventListener('blur', validatePostalCode);

function validatePostalCode() {
    if (postalCodeInputSignup.value.length < 4 || postalCodeInputSignup.value.length > 5) {
        signupErrors[7].style.display = 'inherit';
        signupErrors[7].textContent = '* must contain 4 or 5 numbers';
        postalCodeInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        postalCodeInputSignup.style.border = '2px solid green';
    }
}

postalCodeInputSignup.addEventListener('focus', function() {
    signupErrors[7].style.display = 'none';
})

emailInputSignup.addEventListener('blur', validateEmail);

var emailRegex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

function validateEmail() {
    if (!emailRegex.test(emailInputSignup.value)) {
        signupErrors[8].style.display = 'inherit';
        signupErrors[8].textContent = '* invalid email';
        emailInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        emailInputSignup.style.border = '2px solid green';
    }
}

emailInputSignup.addEventListener('focus', function() {
    signupErrors[8].style.display = 'none';
})

passwordInputSignup.addEventListener('blur', validatePassword);

function validatePassword() {
    if (passwordInputSignup.value.length == 0) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* this field is required';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (!validation1(passwordInputSignup)) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* must contain letters and numbers';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (passwordInputSignup.value.length < 8) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* must contain at least 8 caracters';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        passwordInputSignup.style.border = '2px solid green';
    }
}

passwordInputSignup.addEventListener('focus', function() {
    signupErrors[9].style.display = 'none';
})

repeatPasswordInputSignup.addEventListener('blur', matchPassword);

function matchPassword() {
    if (repeatPasswordInputSignup.value.length == 0) {
        signupErrors[10].style.display = 'inherit';
        signupErrors[10].textContent = '* this field is required';
        repeatPasswordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (repeatPasswordInputSignup.value != passwordInputSignup.value) {
        signupErrors[10].style.display = 'inherit';
        signupErrors[10].textContent = '* passwords dont match';
        repeatPasswordInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        repeatPasswordInputSignup.style.border = '2px solid green';
    }
}

repeatPasswordInputSignup.addEventListener('focus', function() {
    signupErrors[10].style.display = 'none';
})

function containNumber(validationString) {
	var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    
    for (var i = 0 ; i < validationString.value.length ; i++) {
		if(numbers.includes(validationString.value[i])){
			return true
		}
	}
    return false
}

function validation2(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    var blankSpace = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++;
        }
        else if(' '.includes(strings.value[i])) {
            blankSpace++;
        }
        else {
            stri++;
        }

    if (num > 0 && stri > 0 && blankSpace > 0) {
        return true
    }}
    return false
}

function validation1(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++;
        }
        else {
            stri++;
        }
    if (num > 0 && stri > 0) {
        return true
    }}
    return false
}

validationBoxS = document.getElementById('signup-validation');
submitInputSignup.addEventListener('click', showResultsSignup);

validationBoxS.style.display = 'none';

function showResultsSignup() {
    event.preventDefault();
    validationBoxS.style.display = 'inherit';
    validationBoxS.scrollIntoView(true);
    var doFetch = true;
    if (validateName()) {
        validationResultsSignup[0].textContent = 'Invalid name: please check input requirements';
        validationResultsSignup[0].style.color = 'red';
        doFetch = false;
    }

    else {
        validationResultsSignup[0].textContent = `Name: ${nameInputSignup.value}`;
        validationResultsSignup[0].style.color = 'green';
    }

    if (validateLastname()) {
        validationResultsSignup[1].textContent = 'Invalid last name: please check input requirements';
        validationResultsSignup[1].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[1].textContent = `Last name: ${lastnameInputSignup.value}`;
        validationResultsSignup[1].style.color = 'green';
    }

    if (validateDNI()) {
        validationResultsSignup[2].textContent = 'Invalid DNI: please check input requirements';
        validationResultsSignup[2].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[2].textContent = `DNI: ${dniInputSignup.value}`;
        validationResultsSignup[2].style.color = 'green';
    }

    if (validateDate()) {
        validationResultsSignup[3].textContent = 'Invalid birth date: please check input requirements';
        validationResultsSignup[3].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[3].textContent = `Birth date: ${dateInputSignup.value}`;
        validationResultsSignup[3].style.color = 'green';
    }

    if (validateTel()) {
        validationResultsSignup[4].textContent = 'Invalid phone number: please check input requirements';
        validationResultsSignup[4].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[4].textContent = `Phone number: ${telInputSignup.value}`;
        validationResultsSignup[4].style.color = 'green';
    }

    if (validateAddress()) {
        validationResultsSignup[5].textContent = 'Invalid address: please check input requirements';
        validationResultsSignup[5].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[5].textContent = `Address: ${addressInputSignup.value}`;
        validationResultsSignup[5].style.color = 'green';
    }

    if (validateLocation()) {
        validationResultsSignup[6].textContent = 'Invalid city: please check input requirements';
        validationResultsSignup[6].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[6].textContent = `City: ${locationInputSignup.value}`;
        validationResultsSignup[6].style.color = 'green';
    }

    if (validatePostalCode()) {
        validationResultsSignup[7].textContent = 'Invalid postal code: please check input requirements';
        validationResultsSignup[7].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[7].textContent = `Postal code: ${postalCodeInputSignup.value}`;
        validationResultsSignup[7].style.color = 'green';
    }

    if (validateEmail()) {
        validationResultsSignup[8].textContent = 'Invalid email';
        validationResultsSignup[8].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[8].textContent = `Email: ${emailInputSignup.value}`;
        validationResultsSignup[8].style.color = 'green';
    }

    if (validatePassword()) {
        validationResultsSignup[9].textContent = 'Invalid password: please check input requirements';
        validationResultsSignup[9].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[9].textContent = `Password: ${passwordInputSignup.value}`;
        validationResultsSignup[9].style.color = 'green';
    }

    if (matchPassword()) {
        validationResultsSignup[10].textContent = 'Passwords dont match';
        validationResultsSignup[10].style.color = 'red';
        doFetch = false;
    }
    else {
        validationResultsSignup[10].textContent = `Password validation: OK`;
        validationResultsSignup[10].style.color = 'green';
    }

    if (doFetch) {
        var date = new Date(dateInputSignup.value);
        var month = (1 + date.getMonth()).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        formattedDate = month + '/' + day + '/' + date.getFullYear();
        fetch(`${signupUrl}?email=${emailInputSignup.value}&password=${passwordInputSignup.value}&lastName=${lastnameInputSignup.value}&name=${nameInputSignup.value}&dni=${dniInputSignup.value}&dob=${formattedDate}&phone=${telInputSignup.value}&address=${addressInputSignup.value}&city=${locationInputSignup.value}&zip=${postalCodeInputSignup.value}`)
            .then(res => res.json())
            .then(signupStatus => {
                if (signupStatus.success) {
                    localStorage.setItem('name', signupStatus.data.name);
                    localStorage.setItem('lastName', signupStatus.data.lastName);
                    localStorage.setItem('dni', signupStatus.data.dni);
                    localStorage.setItem('dob', signupStatus.data.dob);
                    localStorage.setItem('phone', signupStatus.data.phone);
                    localStorage.setItem('address', signupStatus.data.address);
                    localStorage.setItem('city', signupStatus.data.city);
                    localStorage.setItem('zip', signupStatus.data.zip);
                    localStorage.setItem('email', signupStatus.data.email);
                    localStorage.setItem('password', signupStatus.data.password);
                    localStorage.setItem('repeatPassword', signupStatus.data.password);
                    document.getElementById('signup-form').reset();
                    alert( 'Success: ' + signupStatus.success + '. \nMessage: ' + signupStatus.msg);
                }
            })
    }
}

const load = () => {
    if (localStorage.getItem('name')) {
        nameInputSignup.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('lastName')) {
        lastnameInputSignup.value = localStorage.getItem('lastName');
    }
    if (localStorage.getItem('dni')) {
        dniInputSignup.value = localStorage.getItem('dni');
    }
    if (localStorage.getItem('dob')) {
        var date = new Date(localStorage.getItem('dob'));
        var month = (1 + date.getMonth()).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        formattedDate = date.getFullYear() + '-' + month + '-' + day;
        dateInputSignup.value = formattedDate; 
    }
    if (localStorage.getItem('phone')) {
        telInputSignup.value = localStorage.getItem('phone');
    }
    if (localStorage.getItem('address')) {
        addressInputSignup.value = localStorage.getItem('address');
    }
    if (localStorage.getItem('city')) {
        locationInputSignup.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('zip')) {
        postalCodeInputSignup.value = localStorage.getItem('zip');
    }
    if (localStorage.getItem('email')) {
        emailInputSignup.value = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
        passwordInputSignup.value = localStorage.getItem('password');
    }
  }
  window.onload = load;