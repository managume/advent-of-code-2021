// Importo el paquete fs para leer el archivo de texto input.txt y generar un array a partir del mismo.
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf-8').split('\n');

// Función para calcular el Consumo de Energía
function calculatePowerConsumption(input) {
    // Creo un array de N elementos a CERO. Siendo N el número de dígitos de cada número binario.
    var binarySum = new Array(input[0].length).fill(0)

    // Recorro el array de entradas y voy sumando cada dígito en su índice correspondiente.
    input.forEach((bin) => {
        bin.split('').map((char,index) => {
            binarySum[index] += parseInt(char);
        })
    });

    // Para obtener el binario resultante de gamma, compruebo si hay más UNOS o CEROS.
    var gamma = binarySum.map((sum,index) => {
        return binarySum[index] = sum > Math.ceil(input.length/2) ? 1 : 0;
    }).join('')

    // Para obtener el binario resultante de epsilon, invierto el binario de gamma.
    var epsilon = binarySum.map((num) => {
        return parseInt(num) == 0 ? '1' : '0';
    }).join('');

    // Multiplico el resultado de convertir los binarios de gamma y epsilon en enteros.
    var power = parseInt(gamma,2) * parseInt(epsilon,2);

    return power;
}

var result = calculatePowerConsumption(input);
console.log(result);