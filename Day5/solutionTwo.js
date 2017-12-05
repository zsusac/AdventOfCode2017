
let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

let list = []

lineReader.on('line', (line) => {
  list.push(parseInt(line))
})

lineReader.on('close', (line) => {
  let step = 0
  let position = 0

  while (position >= 0 && position < list.length) {
    step++
    let currentPosition = position
    if (typeof list[position] === 'undefined') {
      break
    }
    position += list[position]

    if (list[currentPosition] >= 3) {
      list[currentPosition] -= 1
    } else {
      list[currentPosition] += 1
    }
  }
  console.log(step)
})
