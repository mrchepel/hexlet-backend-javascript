import querystring from 'querystring';

// import http from 'http';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import startServer from '..';

const hostname = 'http://localhost';
const port = 8081;
const url = `${hostname}:${port}`;

const config = {
  adapter: httpAdapter,
};

describe('Phonebook', () => {
  let server;

  describe('Server', () => {
    it('GET /', (done) => {
      startServer(port, async (s) => {
        server = s;
        try {
          const res = await axios.get(url, config);
          expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    afterEach(() => {
      server.close();
    });

    it('GET /search?q=<substr>', (done) => {
      const expected = `
Miss Lindsey Hermann, 1-559-706-3580
Miss Herman Orn, 988-099-6371
Ms. Liana Herman, (422) 346-7454
Herman Oberbrunner, 315-607-3728`;

      startServer(port, async (s) => {
        server = s;
        const params = { q: 'HermaN' };
        const query = querystring.stringify(params);
        try {
          const res = await axios.get(`${url}/search?${query}`, config);
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search?q=<substr> 2', (done) => {
      const expected = `
Lilliana Conn, 1-484-608-2239
Ms. Liana Herman, (422) 346-7454`;

      startServer(port, async (s) => {
        server = s;
        const params = { q: 'LIANA' };
        const query = querystring.stringify(params);
        try {
          const res = await axios.get(`${url}/search?${query}`, config);
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search?q=<undefined>', (done) => {
      const expected = '';

      startServer(port, async (s) => {
        server = s;
        const params = { q: 'AAsdf2' };
        const query = querystring.stringify(params);
        try {
          const res = await axios.get(`${url}/search?${query}`, config);
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search', (done) => {
      const expected = '';

      startServer(port, async () => {
        try {
          const res = await axios.get(`${url}/search`, config);
          expect(res.data).toBe(expected);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });
  });
});
