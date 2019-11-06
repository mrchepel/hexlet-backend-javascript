import fs from 'fs';
import path from 'path';
import getJsonFileData from '../objects';

it('getJsonFileData', () => {
  const actual = getJsonFileData();
  const fileContent = fs.readFileSync(path.join(__dirname, '..', 'example.json'), 'utf-8');
  const expected = JSON.parse(fileContent);
  expect(actual).toEqual(expected);
});
