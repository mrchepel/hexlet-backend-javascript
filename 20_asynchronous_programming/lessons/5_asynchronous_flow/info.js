/* eslint-disable import/prefer-default-export */
import fs from 'fs';

const compareFileSizes = (pathFile1, pathFile2, cb) => {
  fs.stat(pathFile1, (_error1, data1) => {
    fs.stat(pathFile2, (_error2, data2) => {
      cb(null, Math.sign(data1.size - data2.size));
    });
  });
};

export { compareFileSizes };
