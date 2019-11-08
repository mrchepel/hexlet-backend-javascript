import { sum } from 'lodash';

export default (...args) => {
  if (args.length === 0) {
    return null;
  }
  return sum(args) / args.length;
};
