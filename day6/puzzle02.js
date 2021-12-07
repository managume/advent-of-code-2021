const { kMaxLength } = require("buffer");
const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf-8")
  .split(",")
  .map((num) => parseInt(num));

function lanternfishUnlimitedSimulation(input, days) {
    var fishesByAge = new Array(9).fill(0)
    input.forEach(fish => {
        fishesByAge[fish] += 1
    });
    for (let d = 1; d <= days; d++) {
        var ret = fishesByAge.shift()
        fishesByAge.push(0)
        if(ret > 0){
            fishesByAge[6] += ret
            fishesByAge[8] += ret
        }
    }
    return fishesByAge.reduce((a,b) => a + b)
}

var ret = lanternfishUnlimitedSimulation(input,256)
console.log(ret)