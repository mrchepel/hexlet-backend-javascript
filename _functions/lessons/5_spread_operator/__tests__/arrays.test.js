import union from '../arrays';

it('union', () => {
  expect(union([])).toEqual([]);
  expect(union([], [])).toEqual([]);
  expect(union([], [], [])).toEqual([]);

  expect(union([3])).toEqual([3]);
  expect(union([3, 2], [2, 2, 1])).toEqual([3, 2, 1]);
  expect(union(['a', 3, false], [true, false, 3], [false, 5, 8])).toEqual(['a', 3, false, true, 5, 8]);
});
