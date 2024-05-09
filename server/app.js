// * Enviroments
require('dotenv').config();

// * Starting the server
const Server = require('./src/server/main.server');
new Server().listen();