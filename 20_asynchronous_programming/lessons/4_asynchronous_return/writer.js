import fs from 'fs';

export default (filepath, data, callback) => {
  fs.writeFile(filepath, data, 'utf8', callback);
};
