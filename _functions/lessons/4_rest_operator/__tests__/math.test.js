import average from '../math';

it('average', () => {
  expect(average(0)).toBe(0);
  expect(average(0, 10)).toBe(5);
  expect(average(-3, 4, 2, 10)).toBe(3.25);
  expect(average()).toBeNull();
});
