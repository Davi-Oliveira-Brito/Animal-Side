import 'dotenv/config';

import express from 'express';
import cors from 'cors';


import adminController from './Controller/adminController.js'
import cadastroController from './Controller/cadastroController.js'


const server = express();
server.use(cors());
server.use(express.json());


server.use(adminController);
server.use(cadastroController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))