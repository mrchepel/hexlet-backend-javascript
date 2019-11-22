import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('23_regexp/lessons/11_flags/solution', 'utf8').trim();

  const [pattern, flags] = solution.split('\n');
  const regexp = new RegExp(pattern.trim(), flags);

  it('should match', () => {
    const strings = ['"python"', "'Python'", "'PYTHON'", '"pyTHon"'];
    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = ['python"', "'PYTHON", 'python', '\'pYThon"', '"pYThon\''];
    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
