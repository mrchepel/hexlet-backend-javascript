/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const reverse = (filepath) => fs.readFile(filepath, 'utf8')
  .then((data) => fs.writeFile(filepath, data.split('\n').reverse().join('\n')));
