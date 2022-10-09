import { buscarPorFiltro, listarTodosAnimais } from '../Repository/animalRepository.js'

import { Router } from "express";
const server = Router();


server.get('/animal', async (req, resp) => {
    try {
        const resposta = await listarTodosAnimais();
        resp.send(resposta);
    } catch (error) {
        resp.status(404).send({
            error: error.message
        });
    }
});

server.get('/animal/q', async (req,resp) =>{
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

server.get('/animal/porte', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroPorte(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/animal/raca', async (req,resp) =>{
    try{
        const idade = req.query.idade;
        const resposta = await filtroMenorIdade(idade);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/animal/maior', async (req,resp) =>{
    try{
        const idade = req.query.idade;
        const resposta = await filtroMaiorIdade(idade);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/animal/sexo', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroSexo(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

export default server;