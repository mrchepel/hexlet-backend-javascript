/* eslint-disable no-console */
import sayPrimeOrNot from '../prime';

beforeEach(() => {
  console.log = jest.fn();
});

describe('should be prime', () => {
  const numbers = [2, 3, 13];

  test.each(numbers)('test with %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenCalledWith('yes');
  });
});


describe('should not be prime', () => {
  const numbers = [8, 4, 1, 0, -3, 9];

  test.each(numbers)('test with %i', (num) => {
    sayPrimeOrNot(num);
    expect(console.log).toHaveBeenCalledWith('no');
  });
});
