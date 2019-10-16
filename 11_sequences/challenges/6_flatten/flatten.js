import {
  l, reverse, isList, cons, reduce, concat,
} from '@hexlet/pairs-data';

const flatten = (list) => {
  const func = (item, acc) => {
    if (isList(item)) {
      return concat(reduce(func, l(), item), acc);
    }
    return cons(item, acc);
  };
  return reverse(reduce(func, l(), list));
};

export default flatten;
