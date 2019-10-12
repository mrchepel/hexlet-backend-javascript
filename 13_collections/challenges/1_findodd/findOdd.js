export default (arr) => {
  const newArr = arr.slice();
  let index = 0;
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr.filter((item) => item === newArr[i]).length % 2 !== 0) {
      index = i;
    }
  }
  return newArr[index];
};
