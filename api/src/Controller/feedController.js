import { buscarCard,filtroTipo, filtroSexo, filtroPorte, filtroMenorIdade, filtroMaiorIdade ,adocaoCard } from '../Repository/feedRepository.js'

import { Router } from "express";
const server = Router();


server.get('feed/buscaNome/q', async (req,resp) =>{
    try{
        const nome = req.query.nome;
        const resposta = await buscarCard(nome);
        resp.status(200).send(resposta);
        console.log(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})



server.get('/feed/filtroTipo/q', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroTipo(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})


server.get('/feed/filtroPorte/q', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroPorte(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/feed/filtroMenorIdade/q', async (req,resp) =>{
    try{
        const idade = req.query.idade;
        const resposta = await filtroMenorIdade(idade);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/feed/filtroMaiorIdade/q', async (req,resp) =>{
    try{
        const idade = req.query.idade;
        const resposta = await filtroMaiorIdade(idade);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})

server.get('/feed/filtroSexo/q', async (req,resp) =>{
    try{
        const id = req.query.id;
        const resposta = await filtroSexo(id);

        resp.status(200).send(resposta)
    } catch (error){
        error:error.message
    }

})


server.get('/feed/listarCards', async (req,resp) => {
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