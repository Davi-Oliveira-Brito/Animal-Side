import { buscarPorFiltro, listarTodosAnimais } from '../Repository/animalRepository.js'

import { Router } from "express";
const server = Router();


server.get('/feed/animal/q', async (req,resp) =>{
    try{
        let { nome } = req.query;
        let { tipo } = req.query;
        let { sexo } = req.query;
        let { porte } = req.query;
        let { menor } = req.query;
        let { maior } = req.query;
        
        const resposta = await buscarPorFiltro(nome, tipo, sexo, porte, menor, maior);
        
        resp.status(200).send(resposta);
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})

server.get('/feed/listarTodos', async (req, resp) => {
    try {
        const resposta = await listarTodosAnimais();
        resp.send(resposta);
    } catch (error) {
        resp.status(404).send({
            error: error.message
        });
    }
});

export default server;