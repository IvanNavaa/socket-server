import Server from "./classes/server";
import { router } from './routes/router';
import cors from 'cors';

const server = new Server();
var bodyParser = require('body-parser');
//bodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({ origin: true, credentials: true }));



//del otro ts
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor en el puerto ${server.port}`);

});