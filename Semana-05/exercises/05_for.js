console.log('Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.');

var names = [`axel`, `roman`, `lourdes`, `bruno`, `jose`];
for(i= 0; i < names.length; i++){
    alert(names[i]);
}

console.log('Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.');

for(i= 0; i < names.length; i++){
    names[i] = names[i].substring(0, 1).toUpperCase() + names[i].substring(1);
    alert(names[i].substring(0, 1).toUpperCase() + names[i].substring(1));
}

console.log('Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.');

var sentence = '';
for(i= 0; i < names.length; i++){
    sentence = sentence + ' ' + names[i];
}
alert(sentence);

console.log('Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).')

var array = [];
for(i=0; i < 10; i++){
    array[i] = i ;
}
console.log(array);