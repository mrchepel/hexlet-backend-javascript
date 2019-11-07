import { make, set, get } from '../map';

describe('MapTest', () => {
  it('testMap', () => {
    const map = make();
    const result1 = get(map, 'key');
    expect(result1).toBeNull();

    const result2 = get(map, 'key', 'value');
    expect(result2).toBe('value');

    set(map, 'key2', 'value2');
    const result3 = get(map, 'key2');
    expect(result3).toBe('value2');

    set(map, 'key2', 'another value');
    const result4 = get(map, 'key2');
    expect(result4).toBe('another value');
  });

  it('testMapCollisions', () => {
    const map = make();

    set(map, 'aaaaa0.462031558722291', 'vvv');
    set(map, 'aaaaa0.0585754039730588', 'boom!');

    const result1 = get(map, 'aaaaa0.462031558722291');
    expect(result1).toBe('vvv');

    const result2 = get(map, 'aaaaa0.0585754039730588');
    expect(result2).toBe('boom!');

    set(map, 'aaaaa0.462031558722291', 'wop');
    const result3 = get(map, 'aaaaa0.462031558722291');
    expect(result3).toBe('wop');
  });
});
