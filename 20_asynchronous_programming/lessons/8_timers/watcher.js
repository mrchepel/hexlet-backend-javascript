import fs from 'fs';

export default (filePath, interval, cb) => {
  const id = setInterval(() => {
    fs.stat(filePath, (error, stat) => {
      if (error) {
        clearInterval(id);
        cb(error);
        return;
      }
      if ((Date.now() - stat.mtimeMs) < interval) {
        cb(null);
      }
    });
  }, interval);
  return id;
};
