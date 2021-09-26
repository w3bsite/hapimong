'use strict';
require('dotenv').config()
const mongoose = require('mongoose');
const Hapi = require('@hapi/hapi');
const routes = require('./config/routes/index');
mongoose.connect(
    process.env.MONGODB_URI
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route(routes)
    await server.start();

    console.log('Server running on %s', server.info.uri, mongoose.connection.readyState);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();