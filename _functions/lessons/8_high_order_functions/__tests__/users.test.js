import takeOldest from '../users';

describe('takeOldest', () => {
  const users = [
    { name: 'Tirion', birthday: '1988-11-19' },
    { name: 'Sam', birthday: '1999-11-22' },
    { name: 'Rob', birthday: '1975-01-11' },
    { name: 'Sansa', birthday: '2001-03-20' },
    { name: 'Tisha', birthday: '1992-02-27' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
  ];

  it('test 1', () => {
    const expected = [
      { name: 'Rob', birthday: '1975-01-11' },
    ];
    expect(takeOldest(users)).toEqual(expected);
  });

  it('test 2', () => {
    const expected = [
      { name: 'Rob', birthday: '1975-01-11' },
      { name: 'Tirion', birthday: '1988-11-19' },
    ];
    expect(takeOldest(users, 2)).toEqual(expected);
  });

  it('test 3', () => {
    const expected = [
      { name: 'Rob', birthday: '1975-01-11' },
      { name: 'Tirion', birthday: '1988-11-19' },
      { name: 'Tisha', birthday: '1992-02-27' },
      { name: 'Chris', birthday: 'Dec 25, 1995' },
      { name: 'Sam', birthday: '1999-11-22' },
    ];
    expect(takeOldest(users, 5)).toEqual(expected);
  });
});
