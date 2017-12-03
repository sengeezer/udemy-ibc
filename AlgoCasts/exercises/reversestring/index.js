// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newstr = '';
  for (let idx = str.length - 1; idx >= 0; idx--) {
    newstr += str[idx];
  }

  return newstr;
}

// could have done
// return [...str].reverse().join('');
// or:
// for (let char of str) { newstr = char + newstr };
// or:
// return [...str].reduce((newstr, char) => { return char + nestr; }, '');

module.exports = reverse;
