/* eslint-disable no-console */
import fs from 'fs';

export default (path) => {
  const callback = (_error, data) => console.log(data);
  fs.readFile(path, 'utf-8', callback);
};
