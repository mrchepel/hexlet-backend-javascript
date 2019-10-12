import { map } from '@hexlet/pairs-data';
import { getAttribute, getName } from './tags';

export default (tags) => {
  const catalogAtributes = {
    a: 'href',
    img: 'src',
    link: 'href',
  };

  return map((item) => getAttribute(catalogAtributes[getName(item)], item), tags);
};
