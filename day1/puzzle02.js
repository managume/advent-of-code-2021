const fs = require('fs')
const input = fs.readFileSync('input.txt','utf8').split('\n').map((num) => parseInt(num))

function sonarSweep(input){
    var sums = [];
    for (let index = 2; index < input.length; index++) {
        sum = input[index - 2] + input[index - 1] + input[index]
        sums.push(sum)
    }
    var count = 0;
    for (let index = 0; index <= sums.length; index++) {
        count +=
            sums[index - 1] != undefined && sums[index - 1] < sums[index] ? 1 : 0;
    }

    return count;
}

console.log(sonarSweep(input))