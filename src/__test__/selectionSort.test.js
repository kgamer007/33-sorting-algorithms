import selection from '../selectionSort';

describe('Sorting Algorithms', () => {
  const arr = [6, 7, 6, 9, 0];

  function testArray(_arr) {
    for (let i = 0; i < arr.length; i++) {
      if (_arr[i] > _arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  test('Selection Sort', () => {
    const result = selection.selectionSort(arr);
    expect(testArray(result)).toBeTruthy();
  });
});
