// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My version of solution 1
function chunk2(arr, size) {
  const chunkd = [];
  arr.forEach((el) => {
    const last = chunkd[chunkd.length - 1];
    if (last === undefined || last.length === size) {
      chunkd.push([el]);
    } else {
      last.push(el);
    }
  });

  return chunkd;
}

// SG version of solution 1
function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

// My clever solution
function chunk1(array, size) {
  const chunks = [];
  while (array.length > 0) {
    chunks.push(array.slice(0, size));
  }
  return chunks;
}

// SG (working) version
function chunk3(array, size) {
  const chunks = [];
  let idxStart = 0;
  while (idxStart < array.length) {
    chunks.push(array.slice(idxStart, idxStart + size));
    idxStart += size;
  }

  return chunks;
}

// Original first attempt
function chunk0(array, size) {
  const resArr = [];
  const tmpArr = [];
  const extraEls = array.length % size;
  if (extraEls !== 0) {
    const easilyDivParts = array.length - extraEls;
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (tmpArr.length < size + 1) {
      tmpArr.push(element);
    }
  }
}

module.exports = chunk3;
