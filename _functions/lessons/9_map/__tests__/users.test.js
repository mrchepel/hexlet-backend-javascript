import getChildren from '../users';

describe('getChildren', () => {
  it('should be empty', () => {
    expect(getChildren([])).toEqual([]);
  });

  it('test 1', () => {
    const users = [
      {
        name: 'Tirion',
        children: [
          { name: 'Mira', birdhday: '1983-03-23' },
        ],
      },
      { name: 'Bronn', children: [] },
      {
        name: 'Sam',
        children: [
          { name: 'Aria', birdhday: '2012-11-03' },
          { name: 'Keit', birdhday: '1933-05-14' },
        ],
      },
      {
        name: 'Rob',
        children: [
          { name: 'Tisha', birdhday: '2012-11-03' },
        ],
      },
    ];

    const expected = [
      { name: 'Mira', birdhday: '1983-03-23' },
      { name: 'Aria', birdhday: '2012-11-03' },
      { name: 'Keit', birdhday: '1933-05-14' },
      { name: 'Tisha', birdhday: '2012-11-03' },
    ];

    expect(getChildren(users)).toEqual(expected);
  });
});
