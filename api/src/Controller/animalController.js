import { buscaAnimal, buscaPorte, buscaRaca, buscaPreferencia, buscaSexo } from '../Repository/animalRepository.js'

import { Router } from "express";
const server = Router();


server.get('/animal/q', async (req,resp) =>{
    try{
        let { nome } = req.query;
        let { raca } = req.query;
        let { sexo } = req.query;
        let { porte } = req.query;
        let { menor } = req.query;
        let { maior } = req.query;
        
        const resposta = await buscaAnimal(nome, sexo, porte, raca, menor, maior);
        
        resp.status(200).send(resposta);
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})

server.get('/animal/porte', async (req,resp) =>{
    try{
    
        const resposta = await buscaPorte();
        resp.status(200).send(resposta)
    
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }
})

server.get('/animal/raca', async (req,resp) =>{
    try{
        const resposta = await buscaRaca();
        resp.status(200).send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }
})

server.get('/animal/preferencia', async (req,resp) =>{
    try{
        const resposta = await buscaPreferencia();
        resp.status(200).send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})

server.get('/animal/sexo', async (req,resp) =>{
    try{
        const resposta = await buscaSexo();
        resp.status(200).send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})

export default server;