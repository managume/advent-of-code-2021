// Importo el paquete fs para leer el archivo de texto input.txt y generar un array a partir del mismo.
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf-8').split('\n');

function navigation(input){
    var horizontal = 0;
    var depth = 0;
    input.forEach(command => {
        var commandArray = command.split(' ');
        var direction = commandArray[0];
        var value = parseInt(commandArray[1]);
        switch (direction) {
            case 'forward':
                horizontal += value
                break;
            case 'down':
                depth -= value
                break;
            case 'up':
                depth += value
                break;
            default:
                break;
        }
    });
    return {
        'Horizontal': horizontal,
        'Depth' : depth,
        'Result' : Math.abs(horizontal*depth)
    }
}

var ret = navigation(input);
console.log(ret);