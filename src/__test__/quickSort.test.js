import quick from '../quickSort';

describe('Sorting Algorithms', () => {
  const arr = [4, 4, 3, 6, 7];

  function testArray(randomArray) {
    for (let i = 0; i < arr.length; i++) {
      if (randomArray[i] > randomArray[i + 1]) {
        return false;
      }
    }
    return true;
  }

  test('Quick Sort', () => {
    const result = quick.quickSort(arr);
    expect(testArray(result)).toBeTruthy();
  });
});
