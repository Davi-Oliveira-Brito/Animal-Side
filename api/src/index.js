// Enviroment
import 'dotenv/config';

// Express
import express from 'express';
import cors from 'cors';

// Swagger
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'

// Admin
import adminController from './Controller/admin/adminController.js'
import adminAnimalController from './Controller/admin/animalController.js'

// User
import usuarioController from './Controller/usuario/usuarioController.js'

// General
import animalController from './Controller/animalController.js'

const swaggerOptions = JSON.parse(fs.readFileSync('./src/swagger.json'));

// Configuração
const server = express();
server.use(cors());
server.use(express.json());


server.use(adminController);
server.use(adminAnimalController);

server.use(usuarioController)

server.use(animalController);


server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
server.use('/storage/animalAdocao', express.static('storage/animalAdocao'));

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))