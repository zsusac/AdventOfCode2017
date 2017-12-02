let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

let differencesByLines = []

lineReader.on('line', (line) => {
  let splitedLine = line.split('\t')
  let maxInLine = Math.max(...splitedLine)
  let minInLine = Math.min(...splitedLine)
  let difference = maxInLine - minInLine
  differencesByLines.push(difference)
})

lineReader.on('close', (line) => {
  let sum = differencesByLines.reduce((a, b) => a + b, 0)
  console.log(sum)
})
