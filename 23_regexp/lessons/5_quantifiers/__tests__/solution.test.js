import fs from 'fs';

describe('regexp', () => {
  const solution = fs.readFileSync('23_regexp/lessons/5_quantifiers/solution', 'utf8').trim();
  const regexp = new RegExp(solution);

  it('should match', () => {
    const strings = [
      'suPport@hExlet.io',
      'in9Fo@hexlet.io',
      'in_fo@goOgle.com',
    ];

    strings.forEach((string) => expect(string).toMatch(regexp));
  });

  it('should not match', () => {
    const strings = [
      'support@hexletio',
      '^%@hexlet.io',
      'info@he.xlet.io',
      'info@he.io',
      '!info@hexlet.io',
      'info@hexlet.i',
      'info@hexlet.ioioio',
      'info@1hexlet.io',
      'info@hexlet.i3',
      'suPport@hExlet_.io',
      'suPport@hExlet.i^o'];

    strings.forEach((string) => expect(string).not.toMatch(regexp));
  });
});
