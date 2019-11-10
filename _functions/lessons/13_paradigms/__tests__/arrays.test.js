import getDifference from '../arrays';

test('array diff', () => {
  expect(getDifference([3, 2, 1], [2, 3])).toEqual([1]);
  expect(getDifference([], [2, 3])).toEqual([]);
  expect(getDifference([2, 1], [])).toEqual([2, 1]);
});
