#!/usr/bin/env babel-node

import solution from '..';

const port = 8080;
// eslint-disable-next-line no-console
solution(port, (...args) => console.log(...args));
