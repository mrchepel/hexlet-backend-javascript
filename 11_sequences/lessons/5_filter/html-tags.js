import {
  l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

import { getValue, is, map } from '@hexlet/html-tags';

export const filter = (func, list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    if (func(head(items))) {
      return iter(tail(items), cons(head(items), acc));
    }
    return iter(tail(items), acc);
  };
  return iter(list, l());
};

export const quotes = (list) => map((item) => getValue(item), filter((item) => is('blockquote', item), list));

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
