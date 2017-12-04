let validCount = 0

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', (line) => {
  let splitedLine = line.split(' ')
  let hasWord = false
  for (let i = 0; i < splitedLine.length; i++) {
    let word = sortAlphabets(splitedLine[i])
    for (let j = 0; j < splitedLine.length; j++) {
      if (i !== j) {
        let wordTwo = sortAlphabets(splitedLine[j])
        if (word === wordTwo) {
          hasWord = true
        }
      }
    }
  }

  if (!hasWord) {
    validCount++
  }
})

lineReader.on('close', (line) => {
  console.log(validCount)
})

function sortAlphabets(word) {
  return word.split('').sort().join('')
}
