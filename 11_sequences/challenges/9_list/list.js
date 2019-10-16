const delimiter = '\n';

export const l = (...items) => items.join(delimiter);

export const toString = (list) => `(${list.split(delimiter).join(', ')})`;

export const head = (list) => {
  const [first] = list.split(delimiter);
  return first;
};

export const tail = (list) => {
  const [, ...rest] = list.split(delimiter);
  return l(...rest);
};

export const isEmpty = (list) => list.length === 0;

export const cons = (item, list) => {
  const result = [];
  if (list.length === 0) {
    return l(item);
  }
  result.push(item, ...list.split(delimiter));
  return l(...result);
};

export const filter = (predicate, list) => {
  const result = [];
  list.split(delimiter).forEach((elem) => {
    if (predicate(elem)) {
      result.push(elem);
    }
  });
  return l(...result);
};

export const map = (callback, list) => {
  const result = [];
  list.split(delimiter).forEach((elem) => {
    result.push(callback(elem));
  });
  return l(...result);
};

export const reduce = (callback, acc, list) => {
  const iter = (items, result) => {
    if (isEmpty(items)) {
      return result;
    }
    return iter(tail(items), callback(head(items), result));
  };
  return iter(list, acc);
};
