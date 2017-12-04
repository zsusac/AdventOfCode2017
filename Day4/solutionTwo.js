let validCount = 0

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', (line) => {
  let splitedLine = line.split(' ')
  let hasWord = false
  for (let i = 0; i < splitedLine.length; i++) {
    const word = splitedLine[i]
    let permutations = Array.from(permute(word.split(''))).map(perm => perm.join(''))
    for (let j = 0; j < splitedLine.length; j++) {
      if (j !== i) {
        let hasWordValue = (permutations.indexOf(splitedLine[j]) > -1)
        if (hasWordValue) {
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

function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}
