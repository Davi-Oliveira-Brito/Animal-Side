import { buscaRaca, buscaPorte, buscaPreferencia} from "../Repository/cadastroRepository.js"

import { Router } from "express";


const server = Router();

server.get('/admin/buscaRaca', async (req,resp)=>{
    const raca = await buscaRaca();
    console.log(raca)
    resp.status(200).send(raca)
})

server.get('/admin/buscaPreferencia', async (req,resp)=>{
    const preferencia = await buscaPreferencia();
    console.log(preferencia)
    resp.status(200).send(preferencia)
})

server.get('/admin/buscaPorte', async (req,resp)=>{
    const porte = await buscaPorte();
    console.log(porte)
    resp.status(200).send(porte)
})

export default server;