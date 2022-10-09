import { buscarCard,filtroTipo, filtroSexo, filtroPorte, filtroMenorIdade, filtroMaiorIdade ,adocaoCard } from '../Repository/feedRepository.js'

import { Router } from "express";
const server = Router();


server.get('/feed/buscaNome/q', async (req,resp) =>{
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