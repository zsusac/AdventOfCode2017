let point = [1, 1]
let counter = 1
let value = 0

let tendency = 'PLUS'

let grid = [
  {
    x: 1,
    y: 1,
    value: 1
  }
]

let flag = true

while (flag) {
  if (tendency === 'PLUS') {
    for (let index = 0; index < counter; index++) {
      point[0] += 1
      value = calculateValue(point)
      grid.push({
        x: point[0],
        y: point[1],
        value: value
      })
      if (value > 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
        flag = false
      }
    }
    for (let index = 0; index < counter; index++) {
      point[1] += 1
      value = calculateValue(point)
      grid.push({
        x: point[0],
        y: point[1],
        value: value
      })
      if (value > 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
        flag = false
      }
    }
    tendency = 'MINUS'
    counter++
  } else {
    for (let index = 0; index < counter; index++) {
      point[0] -= 1
      value = calculateValue(point)
      grid.push({
        x: point[0],
        y: point[1],
        value: value
      })
      if (value > 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
        flag = false
      }
    }
    for (let index = 0; index < counter; index++) {
      point[1] -= 1
      value = calculateValue(point)
      grid.push({
        x: point[0],
        y: point[1],
        value: value
      })
      if (value > 368078) {
        console.log('[' + point[0] + ', ' + point[1] + ']' + '\t' + value)
        flag = false
      }
    }
    counter++
    tendency = 'PLUS'
  }
}

function calculateValue (point) {
  let pointRight = [point[0] + 1, point[1]]
  let pointLeft = [point[0] - 1, point[1]]
  let pointUp = [point[0], point[1] + 1]
  let pointDown = [point[0], point[1] - 1]
  let pointUpRight = [point[0] + 1, point[1] + 1]
  let pointUpLeft = [point[0] - 1, point[1] + 1]
  let pointDownLeft = [point[0] - 1, point[1] - 1]
  let pointDownRight = [point[0] + 1, point[1] - 1]

  let sum = 0

  for (let index = 0; index < grid.length; index++) {
    if (grid[index].x === pointRight[0] && grid[index].y === pointRight[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointLeft[0] && grid[index].y === pointLeft[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointUp[0] && grid[index].y === pointUp[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointDown[0] && grid[index].y === pointDown[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointUpRight[0] && grid[index].y === pointUpRight[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointUpLeft[0] && grid[index].y === pointUpLeft[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointDownLeft[0] && grid[index].y === pointDownLeft[1]) {
      sum += grid[index].value
    }
    if (grid[index].x === pointDownRight[0] && grid[index].y === pointDownRight[1]) {
      sum += grid[index].value
    }
  }

  return sum
}
