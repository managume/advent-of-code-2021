const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split(',').map(num => parseInt(num))

function calculateFuel(input){
    var fuel = new Array(input.length).fill(0)
    var index = 0
    input.forEach(from => {
        input.forEach( to => {
            var cost = Math.abs(from - to)
            fuel[index] += cost;
        })
        index ++
    })
    return Math.min.apply(Math,fuel)
}

var ret = calculateFuel(input)
console.log(ret);