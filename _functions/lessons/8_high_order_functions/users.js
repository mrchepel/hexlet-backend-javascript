import { sortBy } from 'lodash';

export default (users, count = 1) => sortBy(users, (elem) => Date.parse(elem.birthday))
  .slice(0, count);
