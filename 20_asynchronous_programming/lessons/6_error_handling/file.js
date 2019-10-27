/* eslint-disable import/prefer-default-export */
import fs from 'fs';

const move = (source, dest, cb) => {
  fs.readFile(source, 'utf8', (errorRead, dataSource) => {
    if (errorRead) {
      cb(errorRead);
      return;
    }
    fs.writeFile(dest, dataSource, 'utf8', (errorWrite) => {
      if (errorWrite) {
        cb(errorWrite);
        return;
      }
      fs.unlink(source, cb);
    });
  });
};

export { move };
