import { cons, car, cdr } from '@hexlet/pairs';
import {
  l, head, tail, cons as consList,
} from '@hexlet/pairs-data';

export const make = () => l();
export const node = (tag, content) => cons(tag, content);
export const getName = (element) => car(element);
export const getValue = (element) => cdr(element);
export const append = (dom, element) => consList(element, dom);
export const toString = (list) => {
  let result = '';
  let html = list;
  while (html !== null) {
    const tag = getName(head(html));
    const content = getValue(head(html));
    result = `<${tag}>${content}</${tag}>${result}`;
    html = tail(html);
  }
  return result;
};
