import http from 'http';
import url from 'url';
import querystring from 'querystring';

export default (usersById) => http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err.stack);
  });
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search.json')) {
      response.setHeader('Content-Type', 'application/json');
      const { query } = url.parse(request.url);
      const { q } = querystring.parse(query);
      const normalizedSearch = q ? q.trim().toLowerCase() : '';

      const result = Object.values(usersById)
        .filter((user) => user.name.toLowerCase().includes(normalizedSearch));

      response.end(JSON.stringify(result));
    } else if (request.url.startsWith('/users.json')) {
      response.setHeader('Content-Type', 'application/json');
      const { query } = url.parse(request.url);
      const { page = 1, perPage = 10 } = querystring.parse(query || '');
      const parsedPage = Number(page);
      const parsedPerPage = Number(perPage);
      const users = Object.values(usersById);
      const usersSubset = users.slice(
        (parsedPage * parsedPerPage) - parsedPerPage, parsedPage * parsedPerPage,
      );
      const totalPages = Math.ceil(users.length / perPage);
      response.end(JSON.stringify({
        meta: { page: parsedPage, perPage: parsedPerPage, totalPages }, data: usersSubset,
      }));
    }
  });
  request.resume();
});
