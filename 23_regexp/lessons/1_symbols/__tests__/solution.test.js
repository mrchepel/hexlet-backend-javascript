import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('23_regexp/lessons/1_symbols/solution', 'utf8').trim();

  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['ruby1.9', 'ruby1.h', 'abcruby1.8xyz'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['ruby1a9', 'ruby2.5', 'ruby1111', 'ruby10'];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
