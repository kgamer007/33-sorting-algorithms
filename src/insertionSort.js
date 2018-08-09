function insertionSort(arr) {
  // we're setting variable l to an array of indicies 
  const l = arr.length;
  // looping 
  for (let i = 1; i < l; i++) {
    const temp = arr[i];
    let j = i - 1;
    // looping through j and array j has to be greater than array i 
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  // giving the insertion value of the array
  return arr;
}

return insertionSort;

