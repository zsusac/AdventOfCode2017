let validCount = 0

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', (line) => {
  let splitedLine = line.split(' ')
  let stats = {}
  for (let index = 0; index < splitedLine.length; index++) {
    const word = splitedLine[index]
    if (stats[word]) {
      stats[word] += 1
    } else {
      stats[word] = 1
    }
  }
  let passValid = true
  for (const word in stats) {
    if (stats[word] > 1) {
      passValid = false
    }
  }

  if (passValid) {
    validCount++
  }
})

lineReader.on('close', (line) => {
  console.log(validCount)
})
