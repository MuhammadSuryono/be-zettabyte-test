/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  var sorterArr = words.sort((a, b) => a.length - b.length)
  var shorterString = sorterArr[0]

  while(!words.every((string) => string.startsWith(shorterString))) {
    if (shorterString.length === 0) return

    shorterString = shorterString.slice(0, -1)
  }

  return shorterString
}

console.log(result(words));
