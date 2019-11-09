import { flatten } from 'lodash';

export default (users) => flatten(users.map(({ friends }) => friends))
  .filter(({ gender }) => gender === 'female');
