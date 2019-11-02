/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const exchange = async (file1, file2) => {
  const data1 = await fs.readFile(file1, 'utf-8');
  const data2 = await fs.readFile(file2, 'utf-8');
  await fs.writeFile(file2, `${data1}`);
  await fs.writeFile(file1, `${data2}`);
};
