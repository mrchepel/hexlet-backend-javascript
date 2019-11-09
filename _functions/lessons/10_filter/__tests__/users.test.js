import getGirlFriends from '../users';

describe('getGirlFriends', () => {
  it('should be empty', () => {
    expect(getGirlFriends([])).toEqual([]);
  });

  it('test 1', () => {
    const users = [
      {
        name: 'Tirion',
        friends: [
          { name: 'Mira', gender: 'female' },
          { name: 'Ramsey', gender: 'male' },
        ],
      },
      { name: 'Bronn', friends: [] },
      {
        name: 'Sam',
        friends: [
          { name: 'Aria', gender: 'female' },
          { name: 'Keit', gender: 'female' },
        ],
      },
      {
        name: 'Rob',
        friends: [
          { name: 'Taywin', birdhday: 'male' },
        ],
      },
    ];

    const expected = [
      { name: 'Mira', gender: 'female' },
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ];

    expect(getGirlFriends(users)).toEqual(expected);
  });
});
