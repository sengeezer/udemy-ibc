// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = [...n.toString()].reverse();

  if (Math.sign(n) === -1) {
    const removed = reversed.pop();
    reversed = [removed, reversed.join('')];
  }

  return parseInt(reversed.join(''), 10);
}

// could also move - with x * -1
// parseInt(reversed) * Math.sign(n);

module.exports = reverseInt;
