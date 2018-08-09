function partitionHoare(array, left, right) {
  const pivot = Math.floor((left + right) / 2);
  // making a while loop to have left greater than right as an argument. While that holds true, set another while loop that has the condition left array less than the arry of the combined values of left and right. If those conditions are true then iterate left 
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    // if this is truthy then iterate right negatively
    while (array[right] > array[pivot]) {
      right--;
    }
    // if left value is less than or equal to right then SWAP left and right values while incrementing left and decrementing right. 
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
