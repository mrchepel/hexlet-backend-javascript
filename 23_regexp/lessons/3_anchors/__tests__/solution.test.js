import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('23_regexp/lessons/3_anchors/solution', 'utf8').trim();
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = ['support@hexlet.io'];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = [
      ' support@hexlet.io', 'support@hexlet.io ', 'support@hexletdio',
      '9support@hexlet.io', 'support@hexlet.ioo', 'support@hexlet9io',
    ];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
