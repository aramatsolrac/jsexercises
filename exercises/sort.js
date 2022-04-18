function sort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]; // current = item at index 1  -> 10
    let j = i - 1; // j = index 0
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]; // put to right
      j--;
    }
    array[j + 1] = current; // put to left
  }
  console.log(array);
  return array;
}

module.exports = sort;
