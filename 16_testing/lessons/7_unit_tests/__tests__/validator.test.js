import { isNumber } from 'lodash';
import getImpelementation from '../implementations';

const makeValidator = getImpelementation();

test('validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('some value')).toEqual(true);

  validator.addCheck(isNumber);
  expect(validator.isValid(3)).toEqual(true);
  expect(validator.isValid('1')).toEqual(false);

  validator.addCheck((v) => v > 5);
  expect(validator.isValid(3)).toEqual(false);
  expect(validator.isValid(8)).toEqual(true);

  validator.addCheck((v) => v < 9);
  expect(validator.isValid(3)).toEqual(false);
  expect(validator.isValid(9)).toEqual(false);
  expect(validator.isValid(7)).toEqual(true);
});
