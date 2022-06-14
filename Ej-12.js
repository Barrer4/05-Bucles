let num = window.prompt('Introduzca un número de 3 dígitos')
let dig1 = parseInt(num.substring(0,1))
let dig2 = parseInt(num.substring(1,2))
let dig3 = parseInt(num.substring(2))

console.log(`La suma de ${dig1} + ${dig2} + ${dig3} es igual a ${dig1 + dig2 + dig3}`)

