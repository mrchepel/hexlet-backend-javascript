import path from 'path';
import os from 'os';
import fs from 'fs';
import watch from '../watcher';

const filepath = path.join(os.tmpdir(), 'example2');

beforeAll(() => {
  fs.writeFileSync(filepath, '');
});

test('watch 5: cb should be called once', (done) => {
  let count = 0;
  const id = watch(filepath, 500, () => {
    count += 1;
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 300);
  setTimeout(() => {
    clearInterval(id);
    expect(count).toBe(1);
    done();
  }, 1100);
});

test('watch 6', (done) => {
  const id = watch(filepath, 500, () => {
    expect(id._idleNext).toBeNull(); //eslint-disable-line
    clearInterval(id);
    done();
  });
  setTimeout(() => fs.unlink(filepath, () => {}), 700);
});

test('watch 7', (done) => {
  let count = 0;
  const id = watch(filepath, 500, () => {
    count += 1;
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 100);
  setTimeout(() => fs.appendFileSync(filepath, 'abc'), 300);
  setTimeout(() => {
    clearInterval(id);
    expect(count).toBe(1);
    done();
  }, 1100);
});
