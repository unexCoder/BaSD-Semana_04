/*
2) Strings
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).
*/

// a 
var lowerCaseStr = "this is javascript"
var upperCaseStr = lowerCaseStr.toUpperCase()
console.log(upperCaseStr)

// b 
var longStr = "longer string"
var shortStr = longStr.substring(0,5)
console.log(shortStr)

// c 
var longStr_2 = "red butterfly"
var shortStr_2 = longStr_2.substring(longStr_2.length,longStr_2.length-3)
console.log(shortStr_2)

// d 
var str = "this is Became a Software Developer"
var sub_str_1 = str.substring(0,1).toUpperCase()
var sub_str_2 = str.substring(1).toLowerCase()
var str_2 = sub_str_1 + sub_str_2
console.log(str_2)

// e 
var str_3 = "this is a many words sentence"
var firstWhiteSpace = str_3.indexOf(" ")
console.log(firstWhiteSpace)

// f 
var str_4 = "SOFTWARE DEVELOPMENT"
var whiteSpace = str_4.indexOf(" ")
str_4 = str_4.substring(0,1).toUpperCase() + 
        str_4.substring(1,whiteSpace).toLowerCase() + 
        str_4.substring(whiteSpace,whiteSpace+2).toUpperCase() + 
        str_4.substring(whiteSpace + 2).toLowerCase() 
console.log(str_4)  