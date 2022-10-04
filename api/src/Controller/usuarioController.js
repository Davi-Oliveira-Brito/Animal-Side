import { loginUsuario} from "../Repository/usuarioRepository.js"

import { Router } from "express";


const server = Router();

server.post('/usuario/loginUsuario', async (req, resp) => {
    try{
        const usuario = req.body;
        
        if(!usuario.email || !usuario.senha) 
            throw new Error("Todos os campos são obrigatorios!");          

        const userlogado = await loginUsuario(usuario);

        if(!userlogado)
            throw new Error("Credenciais Inválidas");
        resp.status(200).send({
            id:    userlogado.id,
            email: userlogado.email,
            senha: userlogado.senha
        });

    }catch(err) {
        resp.status(404).send({
            error: err.message
        });
    }

});

export default server;