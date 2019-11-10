export default (signal) => signal.split('').map(
  (item, index, arr) => {
    if (item === '|') {
      return '';
    }
    return (arr[index - 1] === '|') ? 1 : 0;
  },
).join('');
