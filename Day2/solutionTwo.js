let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

let divideResults = []

lineReader.on('line', (line) => {
  let splitedLine = line.split('\t')
  for (let i = 0; i < splitedLine.length; i++) {
    for (let j = 0; j < splitedLine.length; j++) {
      if (i === j) {

      } else {
        if (splitedLine[i] % splitedLine[j] === 0) {
          let res = splitedLine[i] / splitedLine[j]
          divideResults.push(res)
        }
      }
    }
  }
})

lineReader.on('close', (line) => {
  let sum = divideResults.reduce((a, b) => a + b, 0)
  console.log(sum)
})
