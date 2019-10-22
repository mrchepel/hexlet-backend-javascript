import { cloneDeep } from 'lodash';
import getFunction from '../functions';

const set = getFunction();

const obj = { a: [{ b: { c: 3 } }] };

describe('Setup', () => {
  test('set1', () => {
    expect(set(cloneDeep(obj), 'a[0].b.c', 4)).toEqual({ a: [{ b: { c: 4 } }] });
  });
  test('set2', () => {
    expect(set(cloneDeep(obj), ['x', '0', 'y', 'z'], 5)).toEqual({ a: [{ b: { c: 3 } }], x: [{ y: { z: 5 } }] });
  });
  test('set3', () => {
    expect(set(cloneDeep(obj))).toEqual(obj);
  });
});
