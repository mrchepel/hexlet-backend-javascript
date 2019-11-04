import fs from 'fs';
import path from 'path';
import http from 'http';

export default (port, callback) => {
  fs.readFile(path.resolve(__dirname, 'phonebook.txt'), (err, data) => {
    if (err) {
      throw err;
    }
    const users = data.toString().trim().split('\n');
    const s = http.createServer((request, response) => {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${users.length}`,
      ];
      response.end(messages.join('\n'));
    });
    s.listen(port, callback);
  });
};
