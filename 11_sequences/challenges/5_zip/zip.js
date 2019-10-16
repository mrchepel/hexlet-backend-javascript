import {
  l, isEmpty, head, tail, cons, reverse,
} from '@hexlet/pairs-data';

const zip = (list1, list2) => {
  const iter = (elements1, elements2, acc) => {
    if (isEmpty(elements1) || isEmpty(elements2)) {
      return reverse(acc);
    }
    const headElements1 = head(elements1);
    const headElements2 = head(elements2);
    const newAcc = cons(l(headElements1, headElements2), acc);
    return iter(tail(elements1), tail(elements2), newAcc);
  };
  return iter(list1, list2, l());
};

export default zip;
