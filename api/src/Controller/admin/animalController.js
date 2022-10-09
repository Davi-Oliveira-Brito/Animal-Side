import { cadastroAnimal, alterarAnimal, deletarAnimal, alterarImagem } from "../../Repository/admin/animalRepository.js";

import multer from "multer";
const upload = multer({dest: 'storage/animalAdocao'});

import { Router } from "express";
const server = Router();

server.post('/admin/animal', async (req, resp) => {
    try{
        const animalAdocao = req.body;
        validar(animalAdocao);

        const animalInserido = await cadastroAnimal(animalAdocao);
        resp.send({
          insertedId: animalInserido
        });

    }  catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/:id/animal/imagem', upload.single('imagem'), async (req, resp) =>{
    try {
        const { id } = req.params;
        const imagem = req.file.path;
        const resposta = await alterarImagem(imagem, id);
    
        if (resposta != 1)
          throw new Error ('A imagem não foi salva')

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})


server.put('/admin/:id/animal', async (req,resp) =>{
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
                   
        const resposta = await alterarAnimal(animal, id);
        resp.send({x:resposta})
    }catch(error){
        resp.status(404).send({
            error: error.message
        })
    }
})

server.delete('/admin/:id/animal', async (req,resp) =>{
    try{
        const { id } =req.params;
        const resposta = deletarAnimal(id);
        resp.send({x:resposta})
    }catch(error){
        resp.status(404).send({
            error:error.message
        })
    }
})

export default server;