import run from '../strings';

test('strings test', () => {
  expect(run('')).toBeNull();
  expect(run('pow')).toBe('w');
  expect(run('kids')).toBe('s');
});
