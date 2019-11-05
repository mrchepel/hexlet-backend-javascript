import http from 'http';
import url from 'url';

export default (usersById) => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      const { query: { q } } = url.parse(request.url, true);
      if (!q) {
        response.end();
        return;
      }

      const normalizedSearch = q.trim().toLowerCase();
      const result = Object.values(usersById)
        .filter((user) => user.name.toLowerCase().includes(normalizedSearch))
        .map((user) => `${user.name}, ${user.phone}`)
        .join('\n');
      response.end(result);
    }
  });

  request.resume();
});
