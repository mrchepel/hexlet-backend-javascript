import axios from 'axios';

import server from '../index';

const hostname = 'localhost';
const port = 8083;
const url = `http://${hostname}:${port}`;

describe('Phonebook', () => {
  it('/', (done) => {
    server(port, async (s) => {
      try {
        const res = await axios.get(url);
        expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('/users/<id>', async (done) => {
    const result = {
      data: {
        name: 'Mrs. Marlee Lesch',
        phone: '(412) 979-7311',
      },
    };

    server(port, async (s) => {
      try {
        const res = await axios.get(`${url}/users/9.json`);
        expect(res.status).toBe(200);
        expect(res.data).toEqual(result);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('/users/<undefined>', async (done) => {
    server(port, async (s) => {
      try {
        const res = await axios.get(`${url}/users/10000.json`, { validateStatus: () => true });
        expect(res.status).toBe(404);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });
});
