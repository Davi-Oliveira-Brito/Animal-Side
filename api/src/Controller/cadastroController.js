import { buscaRaca, buscaPorte, buscaPreferencia, cadastrarAnimal} from "../Repository/cadastroRepository.js"

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

server.post('/admin/adocao', async (req, resp) => {
    try{
        const animalAdocao = req.body;

        if(!animalAdocao.nome)
          throw new Error ('Nome do animal é obrigatório!')

        if(!animalAdocao.idade)
          throw new Error ('Idade do animal é obrigatório!')

        if(!animalAdocao.sexo)
          throw new Error ('O sexo do animal é obrigatório!')
        
        if(!animalAdocao.descricao)
          throw new Error ('A descricao sobre o animal é obrigatória!')

        if(!animalAdocao.porte)
          throw new Error ('O porte do animal é obrigatório!')

        if(!animalAdocao.raca)
          throw new Error ('A raça do animal é obrigatória!')

        
        if(!animalAdocao.preferencia)
          throw new Error ('A preferência de lar do animal é obrigatória!')

        const animalInserido = await cadastrarAnimal(animalAdocao);
        resp.send({x:1});

    }  catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;