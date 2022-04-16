console.log('Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).');

var string = 'otorrinolaringologo';
console.log(string.toUpperCase());

console.log('Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).');

var string1 = 'Maradona y su mano';
var string2 = string1.substring(0, 5);
console.log(string2);

console.log('Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).');

var string3 = 'Messi el mejor del mundo';
var string4 = string3.substring(string3.length - 3);
console.log(string4);

console.log('Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).');

var string5 = 'mecanicamente';
var string6 = string5.substring(0, 1).toUpperCase() + string5.substring(1).toLowerCase();
console.log(string6);

console.log('Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).');

var string6 = 'El mate es argentino';
var string7 = string6.indexOf(' ', 0);
console.log(string7);

console.log('Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)');

var string8 = 'monumentos nacionales';
var indiceEspacio = string8.indexOf(' ', 0);
var string9 = string8.substring(0, 1).toUpperCase() + string8.substring(1, indiceEspacio).toLowerCase() +
string8.substring(indiceEspacio, indiceEspacio + 2 ).toUpperCase() + string8.substring(indiceEspacio + 2 ).toLowerCase();
console.log(string9);
