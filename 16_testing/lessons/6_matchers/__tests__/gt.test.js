import getFunction from '../functions';

const gt = getFunction();

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).not.toBeTruthy();
});
