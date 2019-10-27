/* eslint-disable import/prefer-default-export */
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (pathDir, cb) => {
  fs.readdir(pathDir, 'utf8', (errorRead, fileNames) => {
    if (errorRead) {
      cb(errorRead);
      return;
    }
    const filePaths = fileNames.map((fileName) => path.join(pathDir, fileName));
    async.map(filePaths, fs.stat, (errorCalc, stats) => {
      const sum = _.sumBy(stats.filter((item) => item.isFile()), 'size');
      cb(errorCalc, sum);
    });
  });
};

export { getDirectorySize };
