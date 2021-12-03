// Importo el paquete fs para leer el archivo de texto input.txt y generar un array a partir del mismo.
const fs = require('fs');
const input = fs.readFileSync('input.txt','utf-8').split('\n');

function aim(input){
    var aim = 0;
    var horizontal = 0;
    var depth = 0;
    input.forEach(command => {
        var command = command.split(' ');
        var direction = command[0];
        var value = parseInt(command[1]);
        switch (direction) {
            case 'down':
                aim += value;
                break;
            case 'up':
                aim -= value;
                break;
            case 'forward':
                horizontal += value;
                depth += aim * value;
                break;
            default:
                break;
        }
    });  
    return {
        'Horizontal' : horizontal,
        'Depth': depth,
        'Aim': aim,
        'Result': Math.abs(horizontal * depth)
    }  
}

var ret = aim(input);
console.log(ret);