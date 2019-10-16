import { /* eslint-disable */
  l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';

import {
  is, hasChildren, children, filter, reduce, toString as htmlToString,
} from '@hexlet/html-tags'; /* eslint-enable */

const select = (tagName, htmlList) => {
  const func = (element, acc) => {
    const newAcc = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, newAcc) : newAcc;
  };
  return reduce(func, l(), htmlList);
};

export default select;
