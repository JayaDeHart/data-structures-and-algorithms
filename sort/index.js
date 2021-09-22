function insertionSort(array) {
  for (let x = 1; x < array.length; x++) {
    while (array[x] < array[x - 1]) {
      [array[x - 1], array[x]] = [array[x], array[x - 1]];
      x--;
    }
  }
  return array;
}

function mergeSort(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length == 1) {
    return array;
  }
  const half = Math.floor(array.length / 2);

  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half, array.length);

  function helper(arr1, arr2) {
    let output = [];
    let x = 0;
    let y = 0;
    while (x < arr1.length || y < arr2.length) {
      if (arr1[x] < arr2[y]) {
        output.push(arr1[x]);
        x++;
      }
      if (arr2[y] < arr1[x]) {
        output.push(arr2[y]);
        y++;
      } else if (x === arr1.length) {
        output.push(arr2[y]);
        y++;
      } else {
        output.push(arr1[x]);
        x++;
      }
    }
    return output;
  }

  return helper(mergeSort(firstHalf), mergeSort(secondHalf));
}

module.exports = {
  insertionSort,
  mergeSort,
};
