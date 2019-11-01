/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

export const getDirectorySize = (dirPath) => fs.readdir(dirPath)
  .then((fileNames) => fileNames.map((fileName) => fs.stat(path.join(dirPath, fileName))))
  .then((promises) => Promise.all(promises))
  .then((stats) => stats.filter((stat) => stat.isFile()))
  .then((files) => _.sumBy(files, 'size'));
