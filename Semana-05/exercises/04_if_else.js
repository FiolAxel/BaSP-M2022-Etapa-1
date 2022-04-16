console.log ('Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.');

var number = Math.random();
if (number >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

console.log('Exercise b');

var age = 80;

if (age < 2) {
    alert('Bebe');
}

if (age >= 2 & age <=12) {
    alert('Niño');
}

if (age >= 13 & age <=19) {
    alert('Adolescente');
}

if (age >= 20 & age <=30) {
    alert('Joven');
}

if (age >= 31 & age <=60) {
    alert('Adulto');
}

if (age >= 61 & age <=75) {
    alert('Adulto mayor');
}

if (age >= 75) {
    alert('Anciano');
}