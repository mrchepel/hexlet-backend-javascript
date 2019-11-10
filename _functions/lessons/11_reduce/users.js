import _ from 'lodash';

export default (users) => {
  const cb = (acc, user) => {
    const { birthday } = user;
    const year = new Date(birthday).getFullYear();
    if (_.has(acc, year)) {
      acc[year] += 1;
    } else {
      acc[year] = 1;
    }
    return acc;
  };
  return users.filter(({ gender }) => gender === 'male').reduce(cb, {});
};
