// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let i;
  let chars = {};

  for (i of str) {
    chars[i] = chars[i] ? chars[i] + 1 : 1;
  }

  const most = Math.max.apply(null, Object.values(chars));
  let x;
  let sol;

  for (x in chars) {
    if (chars[x] == most.toString()) {
       return x;
    }
    // alternative:
    // let toReturn;
    // if (chars[x] > sol) {
    //  sol = chars[x];
    //  toReturn =  x;
    // }
  }
}

module.exports = maxChar;
