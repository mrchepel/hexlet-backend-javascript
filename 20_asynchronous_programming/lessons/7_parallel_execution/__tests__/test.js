import { getDirectorySize } from '../info';

test('getDirectorySize', (done) => {
  getDirectorySize('/undefined', (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('getDirectorySize2', (done) => {
  getDirectorySize('/opt', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(0);
    done();
  });
});

test('getDirectorySize3', (done) => {
  getDirectorySize('20_asynchronous_programming/lessons/7_parallel_execution', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(1711);
    done();
  });
});

test('getDirectorySize4', (done) => {
  getDirectorySize('/usr/local/lib', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(0);
    done();
  });
});
