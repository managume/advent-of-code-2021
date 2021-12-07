const fs = require('fs')

var entries = []
fs.readFileSync('input.txt', 'utf-8').split('\n').map((entry,index) => {
    var coordinates = entry.split(' -> ')
    entries[index] = coordinates
})

var diagram = Array.from(Array(1000), () => new Array(1000).fill(0))

entries.forEach((entry) => {
    var pointA = entry[0].split(',').map(num => parseInt(num,10))
    var pointB = entry[1].split(',').map(num => parseInt(num,10))

    var x = [ parseInt(pointA[0]), parseInt(pointB[0])]
    var y = [ parseInt(pointA[1]), parseInt(pointB[1])]

    if(x[0] == x[1]){
        var x = x[0]
        var from = Math.min.apply(Math,y)
        var to = Math.max.apply(Math,y)
        for (let j = from; j <= to; j++) {
            diagram[j][x] += 1
        }
    }

    if(y[0] == y[1]){
        var y = y[0]
        var from = Math.min.apply(Math,x)
        var to = Math.max.apply(Math,x)
        for (let i = from; i <= to; i++) {
            diagram[y][i] += 1
        }
    }
})

var count = 0;
diagram.forEach(line => {
    line.map((point) => {point >= 2 ? count++ : null})
});

console.log(count)