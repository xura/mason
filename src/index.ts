import { Database } from '@connection';
import server from '@app';

const bootstrap = async () => {
  await Database.connect();
  await (await server)();
};

bootstrap();
