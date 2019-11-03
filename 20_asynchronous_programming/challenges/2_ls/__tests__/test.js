// import path from 'path';
// import fs from 'fs';
// import os from 'os';
import ls from '../ls';

test('ls dir', async () => {
  const expected = [
    { filepath: '/var/backups', mode: 16877 },
    { filepath: '/var/cache', mode: 16877 },
    { filepath: '/var/crash', mode: 17407 },
    { filepath: '/var/lib', mode: 16877 },
    { filepath: '/var/local', mode: 17917 },
    { filepath: '/var/lock', mode: 17407 },
    { filepath: '/var/log', mode: 16893 },
    { filepath: '/var/mail', mode: 17917 },
    { filepath: '/var/opt', mode: 16877 },
    { filepath: '/var/ramfs', mode: 17407 },
    { filepath: '/var/run', mode: 16877 },
    { filepath: '/var/snap', mode: 16877 },
    { filepath: '/var/spool', mode: 16877 },
    { filepath: '/var/tmp', mode: 17407 },
  ];
  const actual = await ls('/var');
  expect(actual).toEqual(expected);
});

test('ls file', async () => {
  const expected = [
    { filepath: '/etc/passwd', mode: 33188 },
  ];
  const actual = await ls('/etc/passwd');
  expect(actual).toEqual(expected);
});
