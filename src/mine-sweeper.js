const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = JSON.parse(JSON.stringify(matrix))

  const countMines = (x, y) => {
    let count = 0

    if (matrix[y - 1]) {
      if (matrix[y - 1][x - 1] === true) count++
      if (matrix[y - 1][x] === true) count++
      if (matrix[y - 1][x + 1] === true) count++
    }

    if (matrix[y][x - 1] === true) count++
    if (matrix[y][x + 1] === true) count++

    if (matrix[y + 1]) {
      if (matrix[y + 1][x - 1] === true) count++
      if (matrix[y + 1][x] === true) count++
      if (matrix[y + 1][x + 1] === true) count++
    }

    return count
  }

  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      resultMatrix[y][x] = countMines(x, y)
    })
  })

  return resultMatrix
}

module.exports = {
  minesweeper,
}
