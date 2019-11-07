import pick from '../objects';

describe('pick', () => {
  it('test 1', () => {
    const data = {};
    expect(pick(data, [])).toEqual({});
    expect(pick(data, ['undefined', 'another'])).toEqual({});
  });

  it('test 2', () => {
    const data = {
      user: 'ubuntu',
      os: 'linux',
    };
    expect(pick(data, [])).toEqual({});
    expect(pick(data, ['none'])).toEqual({});
    expect(pick(data, ['user'])).toEqual({ user: 'ubuntu' });
    expect(pick(data, ['os', 'user'])).toEqual(data);
  });

  it('test 3', () => {
    const data = {
      user: 'ubuntu',
      os: 'linux',
      virtual: false,
    };
    expect(pick(data, ['virtual'])).toEqual({ virtual: false });
    expect(pick(data, ['os', 'user', 'virtual'])).toEqual(data);
  });
});
