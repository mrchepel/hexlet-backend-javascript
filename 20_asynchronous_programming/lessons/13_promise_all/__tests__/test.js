import { getDirectorySize } from '../file';

test('getDirectorySize 1', () => {
  const promise = getDirectorySize('/undefined');
  return expect(promise).rejects.toThrow();
});

test('getDirectorySize 2', () => {
  const promise = getDirectorySize('/opt');
  return expect(promise).resolves.toBe(0);
});

test('getDirectorySize 3', () => {
  const promise = getDirectorySize('/usr/local/bin');
  return expect(promise).resolves.toBe(180550312);
});

test('getDirectorySize 4', () => {
  const promise = getDirectorySize('/usr/local/lib');
  return expect(promise).resolves.toBe(0);
});
