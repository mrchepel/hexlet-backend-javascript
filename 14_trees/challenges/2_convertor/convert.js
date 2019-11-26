const convert = (array) => (
  array.reduce((acc, item) => {
    const [key, value] = item;
    if (Array.isArray(value)) {
      acc[key] = convert(value);
      return { ...acc };
    }
    acc[key] = value;
    return { ...acc };
  }, {}));

export default convert;
