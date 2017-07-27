var fs = require('fs');
var p = process.argv[2],
suma = 0,
buffer;

buffer = fs.readFileSync(p, 'utf8');
buffer = buffer.replace(/\n+$/, '');
buffer = buffer.split('\n');
suma = buffer.length-1;

console.log(suma);

//Ejercicio 3