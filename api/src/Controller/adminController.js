import { loginAdmin } from "../Repository/adminRepository.js"

import { Router } from "express";


const server = Router();

server.post('/admin/loginAdmin', async (req, resp) => {
    try{
        const admin = req.body;
        
        if(!admin.email || !admin.senha) 
            throw new Error("Todos os campos são obrigatorios!");          

        const userlogado = await loginAdmin(admin);

        console.log(userlogado)
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