const fs = require('fs')
const input = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((num) => parseInt(num));

function sonarSweep(input){
    var count = 0;
    for (let index = 0; index <= input.length; index++) {
        count += input[index - 1] != undefined && input[index - 1] < input[index] ? 1 : 0
    }
    return count;
}

console.log(sonarSweep(input))