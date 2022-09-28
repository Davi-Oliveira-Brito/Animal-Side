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
import cadastroController from './Controller/cadastroController.js'

const swaggerOptions = JSON.parse(fs.readFileSync('./src/swagger.json'));

// Configuração
const server = express();
server.use(cors());
server.use(express.json());



server.use(adminController);
server.use(cadastroController);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))