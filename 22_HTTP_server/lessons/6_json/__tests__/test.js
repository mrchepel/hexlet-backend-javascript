import querystring from 'querystring';
import axios from 'axios';

import server from '..';

const hostname = 'localhost';
const port = 8082;
const url = `http://${hostname}:${port}`;

describe('Phonebook', () => {
  describe('Server', () => {
    it('GET /', (done) => {
      server(port, async (s) => {
        try {
          const res = await axios.get(url);
          expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
          done();
        } catch (e) {
          done.fail(e);
        } finally {
          s.close();
        }
      });
    });

    it('GET /search?q=<substr>', (done) => {
      const expected = [
        { name: 'Miss Lindsey Hermann', phone: '1-559-706-3580' },
        { name: 'Miss Herman Orn', phone: '988-099-6371' },
        { name: 'Ms. Liana Herman', phone: '(422) 346-7454' },
        { name: 'Herman Oberbrunner', phone: '315-607-3728' },
      ];

      server(port, async (s) => {
        const params = { q: 'HermaN' };
        const query = querystring.stringify(params);
        try {
          const res = await axios.get(`${url}/search.json?${query}`);
          expect(res.headers['content-type']).toBe('application/json');
          expect(res.data).toEqual(expected);
          done();
        } catch (e) {
          done.fail(e);
        } finally {
          s.close();
        }
      });
    });

    it('/users.json', async (done) => {
      const result = {
        meta: { page: 1, perPage: 3, totalPages: 334 },
        data: [
          { name: 'Chelsie Eichmann', phone: '1-466-807-1978' },
          { name: 'Miss Ewald Dickinson', phone: '699-653-9379' },
          { name: 'Mauricio Cassin', phone: '(683) 115-8139' },
        ],
      };

      server(port, async (s) => {
        try {
          const query = querystring.stringify({ perPage: 3 });
          const res = await axios.get(`${url}/users.json?${query}`);
          expect(res.headers['content-type']).toBe('application/json');
          expect(res.status).toBe(200);
          expect(res.data).toEqual(result);
          done();
        } catch (e) {
          done.fail(e);
        } finally {
          s.close();
        }
      });
    });

    it('/users.json?perPage&page', async (done) => {
      const result = {
        meta: { page: 3, perPage: 4, totalPages: 250 },
        data: [
          { name: 'Mrs. Marlee Lesch', phone: '(412) 979-7311' },
          { name: 'Mrs. Mabelle Cormier', phone: '307.095.4754' },
          { name: 'Kale Macejkovic', phone: '699-803-8578' },
          { name: 'Miss Verla West', phone: '(546) 173-8884' },
        ],
      };

      server(port, async (s) => {
        try {
          const query = querystring.stringify({ perPage: 4, page: 3 });
          const res = await axios.get(`${url}/users.json?${query}`);
          expect(res.headers['content-type']).toBe('application/json');
          expect(res.status).toBe(200);
          expect(res.data).toEqual(result);
          done();
        } catch (e) {
          done.fail(e);
        } finally {
          s.close();
        }
      });
    });
  });
});
