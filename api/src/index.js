// Enviroment
import 'dotenv/config';

// Express
import express from 'express';
import cors from 'cors';

// Swagger
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'

// Routes
import adminController from './Controller/adminController.js'
import feedController from './Controller/feedController.js'
import cadastroController from './Controller/cadastroController.js'
import usuarioController from './Controller/usuarioController.js'
import FeedAdmiController from './Controller/FeedadminController.js'

const swaggerOptions = JSON.parse(fs.readFileSync('./src/swagger.json'));

// Configuração
const server = express();
server.use(cors());
server.use(express.json());



server.use(adminController);
server.use(feedController);
server.use(cadastroController);
server.use(usuarioController);
server.use(FeedAdmiController);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))