// Importo el paquete fs para leer el archivo de texto input.txt y generar un array a partir del mismo.
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf-8').split('\n');

// Función auxiliar para obtener el dígito, 1 o 0, más frecuente en la posición N de todos los binarios
function checkDigitAt(input, index, digit){
    var count = 0;
    input.forEach(bin => {
        count += parseInt(bin.charAt(index))
    });
    if(digit)
        return count >= input.length/2 ? 1 : 0
    else
        return count >= input.length/2 ? 0 : 1
}

// Función para calcular el ratio de oxígeno
function oxygenRating(input){
    for (let index = 0; index < input[0].length && input.length > 1; index++) {
        var digit = checkDigitAt(input,index,1)
        input = input.filter((bin) => parseInt(bin.charAt(index)) == digit)
    }
    return parseInt(input[0],2);
}

// Función para calcular el ratio de dióxido de carbono
function carbonDioxideRating(input){
    for (let index = 0; index < input[0].length && input.length > 1; index++) {
        var digit = checkDigitAt(input,index,0)
        input = input.filter((bin) => parseInt(bin.charAt(index)) == digit)
    }
    return parseInt(input[0],2);
}

// Función para calcular el ratio de soporte vital
function lifeSupportRating(input){
    var oxygen = oxygenRating(input);
    var carbonDioxide = carbonDioxideRating(input);
    console.log(oxygen,carbonDioxide)
    return oxygen * carbonDioxide;
}

var ret = lifeSupportRating(input);
console.log(ret);