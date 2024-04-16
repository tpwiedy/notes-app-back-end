const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // path route
  server.route(routes);
  console.log('server running on port 5000');

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
