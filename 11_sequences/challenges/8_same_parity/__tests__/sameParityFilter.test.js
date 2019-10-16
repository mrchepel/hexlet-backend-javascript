import { l, toString as listToString } from '@hexlet/pairs-data';
import sameParity from '../sameParityFilter';

test('SameParity', () => {
  const result = sameParity(l(5, 0, 1, -3, 10));
  expect(listToString(result)).toBe(listToString(l(5, 1, -3)));

  const result2 = sameParity(l(2, 0, 1, -3, 10, -2));
  expect(listToString(result2)).toBe(listToString(l(2, 0, 10, -2)));

  const result3 = sameParity(l(-1, 0, 1, -3, 10, -2));
  expect(listToString(result3)).toBe(listToString(l(-1, 1, -3)));

  const result4 = sameParity(l(10, -1.5, 1.3, -3, 25, -2));
  expect(listToString(result4)).toBe(listToString(l(10, -2)));

  const result5 = sameParity(l());
  expect(listToString(result5)).toBe(listToString(l()));
});
