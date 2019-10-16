import {
  l, head, tail, filter, map, reduce, isEmpty, cons, toString,
} from '../list';

test('isEmpty list', () => {
  const list = l();
  expect(toString(list)).toBe('()');
});

test('one item', () => {
  const list = l('foo');
  expect(head(list)).toBe('foo');
  expect(toString(tail(list))).toBe('()');
});

test('multiple items', () => {
  const list = l('foo', 'bar', 'baz');
  expect(head(list)).toBe('foo');
  expect(toString(tail(list))).toBe(toString(l('bar', 'baz')));
});

test('isEmpty', () => {
  expect(isEmpty(l())).toBeTruthy();
  expect(isEmpty(l('hello'))).toBeFalsy();
});

test('cons', () => {
  const list = l('foo', 'bar', 'baz');
  expect(toString(cons('bas', list))).toBe(toString(l('bas', 'foo', 'bar', 'baz')));
});

test('filter', () => {
  const list = l('foo', 'bar', 'baz');
  expect(toString(filter((item) => item !== 'bar', list))).toBe(toString(l('foo', 'baz')));
  expect(toString(filter((item) => item !== 'baz', list))).toBe(toString(l('foo', 'bar')));
});

test('append to empty', () => {
  const list = l();
  expect(toString(cons('bas', list))).toBe(toString(l('bas')));
});

test('map', () => {
  const list = l('foo', 'bar', 'baz');
  expect(toString(map((item) => item[0], list))).toBe(toString(l('f', 'b', 'b')));
  expect(toString(map((item) => item[1], list))).toBe(toString(l('o', 'a', 'a')));
});

test('reduce', () => {
  const list = l('foo', 'bar', 'baz');
  expect(reduce((item, acc) => (acc ? `${acc}+${item}` : item), '', list)).toBe('foo+bar+baz');
  const list2 = l(3, 4, 1);
  expect(reduce((item, acc) => (acc ? acc * item : item), 1, list2)).toBe(12);
});

test('toString', () => {
  const list = l('foo', 0, 'baz');
  expect(toString(list)).toBe('(foo, 0, baz)');
});
