import { uniq } from 'lodash';

export default (...arrays) => {
  const result = [];
  result.push(...result.concat(...arrays));
  return uniq(result);
};
