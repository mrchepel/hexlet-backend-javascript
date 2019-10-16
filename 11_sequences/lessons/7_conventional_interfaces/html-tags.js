import {
  node, getValue, is, map, filter, reduce,
} from '@hexlet/html-tags';

import { wc } from './utils';

export const extractHeaders = (elements) => {
  const filtered = () => filter((item) => is('h2', item), elements);
  const mapped = () => map((item) => {
    if (is('h2', item)) {
      return node('p', getValue(item));
    }
    return item;
  }, filtered());
  return mapped();
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = () => filter((item) => is(tagName, item), elements);
  const mapped = () => map((item) => wc(word, getValue(item)), filtered());
  return reduce((element, acc) => (element > 0 ? acc + element : acc), 0, mapped());
};
