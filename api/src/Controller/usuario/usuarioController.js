import { alterarInformacoes, cadastrarUsuario, listarInformacoes, loginUsuario, mostrarComentarios, buscarAnimaisPerdidosPorId, cadastroAnimalPerdido, alterarImagemPerdido, alterarAnimalPerdido, enviarAdocaoAnimal, buscarAnimaisPerdidos, enviarComentarioPerdido, buscarComentariosPerdidos, mostrarFeedbacks, MeusInteresses, userPost, deletarAnimalPerdido } from "../../Repository/usuario/usuarioRepository.js"
import { Router } from "express";

import multer from "multer";
const upload = multer({dest: 'storage/animalAdocao'});


const server = Router();


server.post('/usuario/cadastrar/animal/perdido', async (req, resp) => {
    try {
        const animal = req.body;
        if(!animal.idade || animal.idade < 0 ) throw new Error('Idade inválida')
        if(typeof(animal.nome) != 'string' || !animal.nome || animal.nome.length < 2 ||animal.nome.length > 100) throw new Error('Nome Invalido')
        if(!animal.telefone || animal.telefone.length > 11 ) throw new Error('Telefone Inválido')
        if(typeof(animal.descricao) != 'string' || !animal.descricao || animal.descricao.length> 500 ) throw new Error('Descrição Inválida')
        if(!animal.porte || !animal.sexo || !animal.raca) throw new Error('Preencha TODOS os cmapos')

        const result = await cadastroAnimalPerdido(animal);
        resp.send({insertedId: result});
    } catch (error) {
        resp.send({
            x:error.message
        });
    }
});

// Cadastrando o usuario;
server.post('/usuario/cadastrar', async (req, resp) =>{
    try {
        const usuario = req.body;

        if(typeof(usuario.nome)  !== 'string' || !usuario.nome || usuario.nome.length <= 2 || usuario.nome.length > 100) 
            throw new Error('Digite um nome valido');

        if(typeof(usuario.email ) !== 'string' || !usuario.email ) 
            throw new Error('Digite um email valido!');
            
        if(!usuario.senha) 
            throw new Error('Digite uma senha valida!');
        
        const insertedId = await cadastrarUsuario(usuario);     
        resp.send({id: insertedId});
    } catch (error) {
        resp.status(401).send({
            x: error.message
        });
    }
})


// Realizando login do usuario;
server.post('/usuario/login', async (req, resp) => {
    try{
        const usuario = req.body;
        
        if(!usuario.email || !usuario.senha) 
            throw new Error("Todos os campos são obrigatorios!");          

        const userlogado = await loginUsuario(usuario);

        if(!userlogado)
            throw new Error("Credenciais Inválidas");
        resp.status(200).send(userlogado);

    }catch(err) {
        resp.status(404).send({
            error: err.message
        });
    }

});

// Carregando informaçoos do usuario;
server.get('/usuario/informacao/:id', async(req, resp) => {
    try{
        const { id } = req.params;
        const result = await listarInformacoes(id);
        resp.send(result);
    }catch(error) {
        resp.send({
            x: error.message
        });
    }
});


server.put('/usuario/:id', async (req, resp) => {
    try {
        const usuario = req.body;
        const { id } = req.params;        
        const result = await alterarInformacoes(usuario, id);

        resp.send({result});
    } catch (error) {
        resp.send({
            x:error.message
        });
    }
});


server.put('/usuario/:id/animal/perdido/imagem', upload.single('imagem'), async (req, resp) =>{
    try {
        const { id } = req.params;
        const imagem = req.file.path;
        console.log(imagem);
        const resposta = await alterarImagemPerdido(imagem, id);
        if (resposta != 1)
          throw new Error ('A imagem não foi salva')

        resp.status(204).send();
    } catch (error) {
        resp.send({
            error: error.message
        })
    }

})

server.put('/usuario/animal/:id/perdido', async (req, resp) => {
    try {
        const animal = req.body;
        const { id } = req.params;

        if(!animal.idade || animal.idade < 0 ) throw new Error('Idade inválida')
        if(typeof(animal.nome) != 'string' || !animal.nome || animal.nome.length < 2 ||animal.nome.length > 100) throw new Error('Nome Invalido')
        if(!animal.telefone || animal.telefone.length > 11 ) throw new Error('Telefone Inválido')
        if(typeof(animal.descricao) != 'string' || !animal.descricao || animal.descricao.length> 500 ) throw new Error('Descrição Inválida')
        if(!animal.porte || !animal.sexo || !animal.raca) throw new Error('Preencha TODOS os cmapos')

        const result = await alterarAnimalPerdido(animal, id);

        resp.send({affectedRows: result});
    } catch (error) {
        resp.send({
            x: error.message
        });
    }
});



server.get('/usuario/comentarios', async (req, resp) => {
    try {
        const result = await mostrarComentarios();
        
        resp.status(202).send({result});
    } catch (error) {
        resp.status(404).send({
            x:error.message
        })
    }
});


server.get('/usuario/animal/:id/perdido/id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const result = await buscarAnimaisPerdidosPorId(id);
        resp.send(result);
    } catch (error) {
        resp.send({
            x:error.message
        })
    }
});

server.get('/usuario/animal/perdido', async (req, resp) => {
    try {
        const result = await buscarAnimaisPerdidos();
        resp.send(result);
    } catch (error) {
        resp.send(error);
    }
});

server.post('/usuario/:userId/adocao/animal/:animalId', async (req, resp) => {
    try {
        const { animalId } = req.params;
        const { userId } = req.params;
        const { comentario } = req.body;
        if(!comentario) throw new Error('digite um comentario')
        const result = await enviarAdocaoAnimal(animalId, userId, comentario);
        resp.send({
            insertedId: result
        });
        
    } catch (error) {
        resp.status(404).send({
            x: error.message
        });
    }
});

server.post('/usuario/:userId/comentario/animal/perdido/:perdidoId', async (req, resp) => {
    try {
        const { comentario } = req.body;
        if(!comentario) throw new Error('digite um comentario')

        const { userId } = req.params;
        const { perdidoId } = req.params;
        const result = enviarComentarioPerdido(comentario, userId, perdidoId);
        resp.send(result);
    } catch (error) {
        resp.send(error);
    }
})

server.get('/usuario/comentarios/animal/perdido/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const result = await buscarComentariosPerdidos(id);
        resp.send(result);
    } catch (error) {
        resp.send(error);
    }
});


server.get('/usuario/feedbacks/:id', async (req, resp) =>{
    try {
        const {id} = req.params;
        const result = await mostrarFeedbacks(id);
        console.log(id)

        resp.status(202).send({result});
    } catch (error) {
        resp.status(404).send(error)
    }
})

server.get('/usuario/meusinteresses/:id', async (req,resp) =>{
    try {
        const { id } = req.params
        const resposta = await MeusInteresses(id);

        resp.status(202).send({resposta});
    } catch (error) {
        resp.status(404).send(error)
    }
})

server.get('/usuario/userPost/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const result = await userPost(id);

        resp.status(202).send(result);
    } catch (error) {
        resp.status(404).send(error.message);
    }
})

server.delete('/usuario/animal/:id/perdido', async (req, resp) => {
    try {
        const { id } = req.params;
        const result = await deletarAnimalPerdido(id);
        resp.send({
            x:result
        });
    } catch (error) {
        resp.send({
            x:error.message
        });        
    }
});

export default server