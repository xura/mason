import { httpListener, createServer } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { logger$, cors$ } from './api/common';
import { api$ } from './api';

const middlewares = [
  cors$,
  logger$,
  bodyParser$(),
];

const effects = [
  api$,
];

export default createServer({
  port: 3078,
  listener: httpListener({ middlewares, effects })
});
