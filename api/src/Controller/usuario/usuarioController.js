import { alterarInformacoes, cadastrarUsuario, listarInformacoes, loginUsuario, mostrarComentarios, buscarAnimaisPerdidos, cadastroAnimalPerdido } from "../../Repository/usuario/usuarioRepository.js"
import { Router } from "express";


const server = Router();

server.post('/usuario/animal/perdido', async (req, resp) => {
    try {
        const animal = req.body;
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

        if(typeof(usuario.nome)  !== 'string' || !usuario.nome || usuario.nome.length <= 2 || usuario.nome.length > 100) throw new Error('Digite um nome valido');
        if(!usuario.telefone || usuario.telefone.length > 11 ) throw new Error('Digite um telefone valido!');
        if(typeof(usuario.email ) !== 'string' || !usuario.email ) throw new Error('Digite um email valido!');
        if(!usuario.senha) throw new Error('Digite uma senha valida!');
        
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
        const { id } =req.params;
        if (!usuario.VL_RENDA || usuario.VL_RENDA <= 0 )  throw new Error("Campo Renda Invalida")
        if (!usuario.TM_TEMPO_SOZINHO_ANIMAL || usuario.TM_TEMPO_SOZINHO_ANIMAL <=0 ) throw new Error("Campo Tempo sozinho animal invalido")
        if (!usuario.QTD_PESSOAS_CASA || usuario.QTD_PESSOAS_CASA <= 0 ) throw new Error("Campo Quantidade de pessoas em casa invalido ")

        const result = await alterarInformacoes(usuario, id);

        resp.send({result});
    } catch (error) {
        resp.send({
            x:error.message
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


server.get('/usuario/animal/:id/perdido', async (req, resp) =>{
    try {
        const { id } = req.params;
        const result = await buscarAnimaisPerdidos(id);
        resp.send(result);
    } catch (error) {
        resp.send({
            x:error.message
        })
    }
});




export default server;