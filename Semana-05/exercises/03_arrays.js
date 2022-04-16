console.log('Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];

console.log(months[5] + ' ' + months[11]);

console.log('Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)');

var months1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
months1.sort();
console.log(months1);

console.log('Agregar un elemento al principio y al final del array (utilizar unshift y push)');

months.unshift('months first');
months.push('months end');
console.log(months);

console.log('Quitar un elemento del principio y del final del array (utilizar shift y pop)');

months.shift();
months.pop();
console.log(months);

console.log ('Invertir el orden del array (utilizar reverse)');

months.reverse();
console.log(months);

console.log('Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).');

console.log(months.join('-'));

console.log ('Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
console.log(months.slice(4,11));