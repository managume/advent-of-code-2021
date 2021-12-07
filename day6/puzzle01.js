const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split(',').map((num) => parseInt(num))

function lanternfishSimulation(input,days) {
    var state = Array.from(input);
    for (let index = 1; index <= days; index++) {
        state.map((num, index, array) => {
            if( num == 0){
                array[index] = 6
                array.push(8)
            }else{
                array[index] -= 1
            }
        })
    }
    return state.length
}

var ret = lanternfishSimulation(input,80);
console.log(ret)