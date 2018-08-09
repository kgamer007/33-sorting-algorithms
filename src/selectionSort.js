// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(array2) {
  // looping over the elements of the array
  for (let i = 0; i < array.length; i++) {
    // setting a min value to equal i 
    let min = i;
    // making another for loop to have j equal the min + 1.
    for (let j = i + 1; j < array.length; j++) {
      // if array of j is less than array of min, then min becomes j. 
      if (array2[j] < array2[min]) {
        min = j;
      }
    }
    // if i doesn't equal min then have an array of an array of i and min = to array of an array of min and i. SWAPPING 
    if (i !== min) {
      [array2[i], array2[min]] = [array2[min], array2[i]];
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
