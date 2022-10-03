import { buscarAnimal, deletarCard, consultarAnimais, alterarInfoAnimal } from '../Repository/FeedAdminRepository.js'

import { Router } from "express";
const server = Router();

server.get('feed/buscaNome/q', async (req,resp) =>{
    try{
        const nome = req.query.nome;
        const resposta = await buscarAnimal(nome);
        resp.status(200).send(resposta);
        console.log(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }

})

server.delete('/feedadmin/delete/:id', async (req,resp) =>{
    try{
        const { id } =req.params;
        const resposta = deletarCard(id);
        resp.send({x:resposta})
    }catch(error){
        resp.status(404).send({
            error:error.message
        })
    }
})

server.get('/feedAdmin', async (req, resp) =>{
    try{
        const resposta = await consultarAnimais();
        resp.send(resposta)
    }catch(error){
        resp.status(404).send({
            error:error.message
        })
    }
})

server.put('/feedAdmin/:id', async (req,resp) =>{
    try{
        const animal = req.body;
        const { id } = req.params;

        if(animal.nome ||
            animal.idade ||
            animal.descricao ||
            animal.usuario || 
            animal.porte || 
            animal.raca ||
            animal.preferencia||
            animal.sexo ||
            animal.tipo||
            id){
                throw new Error('Todos os campos são necessarios!')
                   }
            
        const resposta = await alterarInfoAnimal(animal, id);
        resp.send({x:resposta})
    }catch(error){
        resp.status(404).send({
            error: error.message
        })
    }
})

export default server;