import { isEmpty, head, tail } from '@hexlet/pairs-data';
import { getValue, is } from '@hexlet/html-tags';

export const reduce = (func, init, list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item = head(items);
    const newAcc = func(item, acc);
    return iter(tail(items), newAcc);
  };
  return iter(list, init);
};

export const emptyTagsCount = (tagName, elements) => {
  const counterIsEmpty = (element, acc) => (is(tagName, element) && getValue(element) === '' ? acc + 1 : acc);
  return reduce(counterIsEmpty, 0, elements);
};

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
