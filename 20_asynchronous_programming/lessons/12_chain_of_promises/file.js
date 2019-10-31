/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (paths) => {
  const [first, ...rest] = paths;
  const result = [];

  const processPath = (filepath) => fs.stat(filepath)
    .then((data) => result.push(getTypeName(data)))
    .catch(() => result.push(null));

  let promise = processPath(first);

  rest.forEach((path) => {
    promise = promise.then(() => processPath(path));
  });
  return promise.then(() => result);
};
