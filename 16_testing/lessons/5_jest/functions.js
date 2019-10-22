import _ from 'lodash';

const functions = {
  right1: _.without,
  wrong1: (coll = [], ...values) => {
    const [result] = coll.reduce(([prevColl, vals], item) => {
      const newVals = vals.filter((val) => val !== item);
      const nextColl = newVals.length === vals.length ? [...prevColl, item] : prevColl;
      return [nextColl, newVals];
    }, [[], values]);

    return result;
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
