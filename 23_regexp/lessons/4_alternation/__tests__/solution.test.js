import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('23_regexp/lessons/4_alternation/solution', 'utf8').trim();

  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['one', 'two', 'three'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['four', 'five'];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
