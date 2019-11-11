import http from 'http';
import url from 'url';
import querystring from 'querystring';

const getParams = (address) => {
  const { query } = url.parse(address);
  return querystring.parse(decodeURI(query || ''));
};

const router = {
  GET: {
    '/users/(\\w+).json': (req, res, matches, users) => {
      const id = matches[1];
      res.setHeader('Content-Type', 'application/json');
      const user = users[id];
      if (!user) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.end(JSON.stringify({ data: user }));
    },
    '/': (req, res, matches, users) => {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(users).length}`,
      ];
      res.end(messages.join('\n'));
    },

    '/search.json': (req, res, matches, users) => {
      res.setHeader('Content-Type', 'application/json');

      const { q = '' } = getParams(req.url);
      const normalizedSearch = q.trim().toLowerCase();
      const ids = Object.keys(users);

      const usersSubset = ids
        .filter((id) => users[id].name.toLowerCase().includes(normalizedSearch))
        .map((id) => users[id]);
      res.end(JSON.stringify({ data: usersSubset }));
    },

    '/users.json': (req, res, matches, users) => {
      res.setHeader('Content-Type', 'application/json');

      const { page = 1, perPage = 10 } = getParams(req.url);
      const ids = Object.keys(users);

      const usersSubset = ids.slice((page * perPage) - perPage, page * perPage)
        .map((id) => users[id]);
      const totalPages = Math.ceil((ids.length) / perPage);
      res.end(JSON.stringify({ meta: { page, perPage, totalPages }, data: usersSubset }));
    },
  },
};

export default (users) => http.createServer((request, response) => {
  const routes = router[request.method];
  const result = Object.keys(routes).find((str) => {
    const { pathname } = url.parse(request.url);
    if (!pathname) {
      return false;
    }
    const regexp = new RegExp(`^${str}$`);
    const matches = pathname.match(regexp);
    if (!matches) {
      return false;
    }

    routes[str](request, response, matches, users);
    return true;
  });

  if (!result) {
    response.writeHead(404);
    response.end();
  }
});
