import axios from 'axios';

import server from '../index';

const hostname = 'localhost';
const port = 8084;
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

  it('POST /users.json', async (done) => {
    const result = {
      data: {
        id: 1001,
        name: 'Tom',
        phone: '1234-234-234',
      },
      meta: {
        location: '/users/1001.json',
      },
    };

    const data = {
      name: 'Tom',
      phone: '1234-234-234',
    };
    server(port, async (s) => {
      try {
        const res = await axios.post(`${url}/users.json`, data);
        expect(res.status).toBe(201);
        expect(res.data).toEqual(result);

        const res2 = await axios.get(`${url}/users/1001.json`);
        expect(res2.status).toBe(200);
        expect(res2.data).toEqual({ data });
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('POST /users.json (with errors)', async (done) => {
    const result = {
      errors: [
        {
          source: 'name',
          title: 'bad format',
        },
        {
          source: 'phone',
          title: "can't be blank",
        },
      ],
    };

    const data = {
      name: '$Tom',
      phone: '',
    };
    server(port, async (s) => {
      try {
        const res = await axios.post(`${url}/users.json`, data, { validateStatus: () => true });
        expect(res.status).toBe(422);
        expect(res.data).toEqual(result);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });
});
