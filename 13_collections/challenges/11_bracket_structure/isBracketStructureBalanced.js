const brackets = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['<', '>'],
]);

const isOpeningSymbol = (symbol) => brackets.has(symbol);

const getClosingSymbolFor = (symbol) => brackets.get(symbol);

const isStackEmpty = (stack) => stack.length === 0;

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      stack.push(getClosingSymbolFor(symbol));
    } else {
      if (isStackEmpty(stack)) {
        return false;
      }
      if (symbol !== stack.pop()) {
        return false;
      }
    }
  }

  return isStackEmpty(stack);
};
