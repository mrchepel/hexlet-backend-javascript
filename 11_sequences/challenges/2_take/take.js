import {
  l, isEmpty, head, tail, cons,
} from '@hexlet/pairs-data';

const take = (n, elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  if (n === 1) {
    return cons(head(elements), l());
  }
  return cons(head(elements), take(n - 1, tail(elements)));
};


export default take;
