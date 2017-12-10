const str = 'abcccccccd';

// const charMap = new Map();
let i;
let chars = {};

for (i of str) {
  // let newVal = charMap.get(i) || 0;
  // charMap.set(i, newVal + 1);
  // could also do:
  chars[i] = chars[i] ? chars[i] + 1 : 1;
}

console.log(chars);

const most = Math.max.apply(null, Object.values(chars));

// console.log('most:', most);

let x;
let sol;

for (x in chars) {
  // console.log(chars[x], most);
  if (chars[x] == most.toString()) {
    sol = chars[x];
  }
}

console.log(sol);
