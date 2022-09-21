import { buscaRaca, buscaPorte, buscaPreferencia} from "../Repository/cadastroRepository.js"

import { Router } from "express";


const server = Router();

server.get('/admin/buscaRaca', async (req,resp)=>{
    const raca = buscaRaca();
    console.log(raca);
    resp.status(200).send({
        raca : raca.raca
    })
})

export default server;