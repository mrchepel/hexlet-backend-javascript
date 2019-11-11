import fs from 'fs';
import path from 'path';

import makeServer from './server';

export default (port, callback = () => {}) => {
  fs.readFile(path.resolve(__dirname, 'phonebook.txt'), (err, data) => {
    if (err) {
      throw err;
    }
    const users = data.toString()
      .trim()
      .split('\n')
      .reduce((acc, value) => {
        const [id, name, phone] = value.split('|').map((item) => item.trim());
        acc[id] = { name, phone };
        return acc;
      }, {});

    const server = makeServer(users);
    server.listen(port, callback.bind(null, server));
  });
};
