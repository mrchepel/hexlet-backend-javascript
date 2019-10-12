const getCarsCountByYear = (collection) => {
  const iter = (rest, acc) => {
    if (rest.length === 0) {
      return acc;
    }
    const [{ year: propName }, ...newRest] = rest;
    const { [propName]: value = 0 } = acc;
    const newAcc = { ...acc, [propName]: value + 1 };

    return iter(newRest, newAcc);
  };
  return iter(collection, {});
};

export default getCarsCountByYear;
