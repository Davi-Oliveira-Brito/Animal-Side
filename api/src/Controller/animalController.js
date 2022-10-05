import { buscarAnimal, filtro } from '../Repository/animalRepository.js'

import { Router } from "express";
const server = Router();


server.get('/feed/animal/q', async (req,resp) =>{
    try{
        const { nome } = req.query;
        const { tipo } = req.query;
        const { sexo } = req.query;
        const { porte } = req.query;
        const { menor } = req.query;
        const { maior } = req.query;
        

        const resposta = await buscarAnimal(nome, tipo, sexo, porte, menor, maior);
        
        resp.status(200).send(resposta);
        console.log(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})


server.get('/feed/filtro/q', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroTipo(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/feed/animais', async (req,resp) => {
    try{
        const resposta = await adocaoCard();
        resp.status(200).send(resposta);
        
    } catch (error){
        resp.status(404).send({
            error:error.message
        });
    }

});

export default server;