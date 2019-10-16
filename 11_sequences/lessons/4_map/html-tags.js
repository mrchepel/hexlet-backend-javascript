import {
  l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

import {
  getName, getValue, node, is,
} from '@hexlet/html-tags';

import { reverse as revStr } from './strings';

export const map = (func, list) => {
  const iter = (elements, acc) => {
    if (isEmpty(elements)) {
      return acc;
    }
    return iter(tail(elements), cons(func(head(elements)), acc));
  };
  return iter(reverse(list), l());
};

const mirror = (elements) => map((item) => node(getName(item), revStr(getValue(item))), elements);

export { mirror };

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', getValue(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
