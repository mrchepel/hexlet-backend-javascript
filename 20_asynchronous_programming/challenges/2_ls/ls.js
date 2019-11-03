import _ from 'lodash';
import path from 'path';
import { promises as fs } from 'fs';

export default async (pathForInspect) => {
  const absolutePath = path.resolve(__dirname, pathForInspect);
  const stat = await fs.stat(absolutePath);
  if (stat.isFile()) {
    return [{ filepath: absolutePath, mode: stat.mode }];
  }
  const filenames = await fs.readdir(absolutePath);
  const filepaths = filenames.sort().map((n) => path.join(absolutePath, n));
  const stats = await Promise.all(filepaths.map(fs.stat));
  return _.zipWith(filepaths, stats, (filepath, { mode }) => ({ filepath, mode }));
};
