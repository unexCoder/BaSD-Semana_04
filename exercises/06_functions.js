/*
6) Funciones
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.
*/

// a 
function add(num1,num2) {
    return num1 + num2
}
var suma = add(13,21)
console.log(suma)

// b 
function add_b(num1,num2) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number' ) {
        return NaN
    }
    return num1 + num2
}
var suma = add_b("13",21)
console.log(suma)

// c 
function validateInteger(num) {
    if (Number.isInteger(num)) {
        return true    
    } else {
        return false
    }
}
console.log(validateInteger(12))
console.log(validateInteger(12.5))

// d 
function add_c(num1,num2) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number' ) {
        return NaN
    }
    // call ex 6c function
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("some arguments are not integer")
        return Math.round(num1 + num2)
    }
    return num1 + num2
}
var suma_2 = add_c(13.2,21.1)
console.log(suma_2)

// e 
function validateInt(num) {
    if (typeof (num) !== 'number') {
        return NaN
    } else if (!Number.isInteger(num)) {
        alert("some arguments are not integer")
        return Math.round(num)
    }
} 

function add_d(num1,num2) {
    return validateInt(num1) + validateInt(num2)
}

// check function
var suma_3 = add_c(34,21)
console.log(suma_3)
var suma_4 = add_c(34.2,21)
console.log(suma_4)
var suma_5 = add_c('34',21)
console.log(suma_5)
