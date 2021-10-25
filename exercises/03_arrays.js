/*
3) Arrays
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
e) Invertir el orden del array (utilizar reverse).
f) Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join).
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).
*/

// a 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(meses[4],meses[10])

// b 
sortedMeses = meses.sort()
console.log(sortedMeses)

// c 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
meses.unshift("Vacaciones")
meses.push("Vacaciones otra vez")
console.log(meses)

// d 
meses.pop()
meses.shift()
console.log(meses)

// e 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
meses.reverse()
console.log(meses)

// f 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var str = meses.join("-")
console.log(str)

// g
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var someMeses = meses.slice(4,11)
console.log(someMeses)