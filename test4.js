/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let length = numbers.length
  let miss = new Array()
  let arraySort = numbers.sort()

  for (var i = 0; i < length; i++) {
    if (arraySort[i] !== i) {
      miss.push(i)
    }
  }

  return miss
}

console.log(result(numbers));
