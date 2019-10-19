import {
  l, cons as consList, concat,
} from '@hexlet/pairs-data';

import {
  is, hasChildren, children, reduce,
} from '@hexlet/html-tags';

const select = (tagName, htmlList) => {
  const func = (element, acc) => {
    const newAcc = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, newAcc) : newAcc;
  };
  return reduce(func, l(), htmlList);
};

export default select;
