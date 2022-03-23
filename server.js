'use strict';

const logrocket = require('logrocket')
logrocket.init('rneivn/mehrnooshproject');


const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server(
        {port: 3005,
        host: 'localhost'}
    )


    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Hello World!"
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();