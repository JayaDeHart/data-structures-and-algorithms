function insertionSort(array) {
  for (let x = 1; x < array.length; x++) {
    while (array[x] < array[x - 1]) {
      [array[x - 1], array[x]] = [array[x], array[x - 1]];
      x--;
    }
  }
  return array;
}

module.exports = insertionSort;
