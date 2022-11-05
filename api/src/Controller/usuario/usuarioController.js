import { cadastrarUsuario, loginUsuario } from "../../Repository/usuario/usuarioRepository.js"
import { Router } from "express";


const server = Router();

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

export default server;