import insert from '../insertionSort';

describe('Sorting Algorithms', () => {
  const arr = [0, 8, 1, 2, 1];

  function testArray(array) {
    for (let i = 0; i < arr.length; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  test('Insertion Sort', () => {
    const sorted = insert.insertionSort(arr);
    expect(testArray(sorted)).toBeTruthy();
  });
});
