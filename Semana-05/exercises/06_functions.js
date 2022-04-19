console.log('Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.');

function suma(num1, num2) {
    return num1 + num2;
}
var resultSuma = suma(5, 10);
console.log(resultSuma);

console.log('A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.');

function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both parameters are not a number');
        return 'NaN'
    }
    return num1 + num2;
}
var resultSuma = suma('Hola', 10);
console.log(resultSuma);

console.log('Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.');

function validateInt(num){
    return Number.isInteger(num);
}

console.log(validateInt(8))

console.log('A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).');

function suma(num1, num2) {
    // this validates if the parameters are numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both parameters are not a number');
        return 'NaN'
    }

    // this validates if the parameters are integers
    if (!validateInt(num1) || !validateInt(num2)){
        alert('One or both numbers arent integers ' + Math.round(num1 + num2))
    } 

    return num1 + num2;
}
console.log(suma(5.5,8))

console.log('Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.');

function entero(num1, num2) {
    // this validates if the parameters are integers
    if (!validateInt(num1) || !validateInt(num2)){
        alert('One or both numbers arent integers ' + Math.round(num1 + num2))
    }

    return num1 + num2;
}

function suma(num1, num2) {
    // this validates if the parameters are numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both parameters are not a number');
        return 'NaN'
    }
    return entero(num1,num2);
}
console.log(suma(5,6.5));