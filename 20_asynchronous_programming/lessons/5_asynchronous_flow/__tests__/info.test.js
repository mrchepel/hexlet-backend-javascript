import { compareFileSizes } from '../info';

test('compareFileSizes 1', (done) => {
  const filepath = `${__dirname}/info.test.js`;
  compareFileSizes(filepath, filepath, (_error1, result) => {
    expect(result).toBe(0);
    done();
  });
});

test('compareFileSizes 2', (done) => {
  const filepath1 = `${__dirname}/info.test.js`;
  const filepath2 = `${__dirname}/../README.md`;
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(-1);
    done();
  });
});

test('compareFileSizes 3', (done) => {
  const filepath1 = `${__dirname}/../README.md`;
  const filepath2 = `${__dirname}/info.test.js`;
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(1);
    done();
  });
});
