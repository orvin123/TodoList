const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        // * Express
        this.app = express();
        this.appSocket = express();

        // * Ports
        this.port = process.env.PORT;
        console.log("Lisening port 3000");

        // * Paths
        this.webPath = '/api/web';

        // * Middleware
        this.middleware();

        // * Rutas
        this.routes();
    } 

       // * Method to initialize the middleware
    middleware() {
        // * CORS
        this.app.use(cors());
        // * Reading and parsing the body
        this.app.use(express.json());
    }

     // * Method to initialize routes
     routes() {
        this.app.use(this.webPath, require('../routes/web.routes'));
    }

    // * Method to initialize the server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server version:`);
        });
    }
}
module.exports = Server;
