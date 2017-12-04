let point = [1, 1]
let value = 1
let counter = 1

let tendency = 'PLUS'

while (value < 368078) {
  if (tendency === 'PLUS') {
    for (let index = 0; index < counter; index++) {
      point[0] += 1
      value++
      if (value === 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
      }
    }
    for (let index = 0; index < counter; index++) {
      point[1] += 1
      value++
      if (value === 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
      }
    }
    tendency = 'MINUS'
    counter++
  } else {
    for (let index = 0; index < counter; index++) {
      point[0] -= 1
      value++
      if (value === 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
      }
    }
    for (let index = 0; index < counter; index++) {
      point[1] -= 1
      value++
      if (value === 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
      }
    }
    counter++
    tendency = 'PLUS'
  }
}
