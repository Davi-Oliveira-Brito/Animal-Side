import { buscaRaca, buscaPorte, buscaPreferencia, cadastrarAnimal, alterarImagem} from "../Repository/cadastroRepository.js"
import { validar } from "../services/validarAnimal.js";

import { Router } from "express";
import multer from "multer";

const server = Router();
const upload = multer({dest: 'storage/animalAdocao'});

server.get('/admin/buscaRaca', async (req,resp)=>{
    const raca = await buscaRaca();
    resp.status(200).send(raca)
})

server.get('/admin/buscaPreferencia', async (req,resp)=>{
    const preferencia = await buscaPreferencia();
    resp.status(200).send(preferencia)
})

server.get('/admin/buscaPorte', async (req,resp)=>{
    const porte = await buscaPorte();
    resp.status(200).send(porte)
})

server.post('/admin/adocao', async (req, resp) => {
    try{
        const animalAdocao = req.body;
        validar(animalAdocao);

        const animalInserido = await cadastrarAnimal(animalAdocao);
        resp.send({
          insertedId: animalInserido
        });

    }  catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/:id/imagem', upload.single('imagem'), async (req, resp) =>{
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

export default server;