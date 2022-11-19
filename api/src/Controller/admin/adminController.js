import buscarUsuarioPorId, { alterarInfoAdmin, buscarInfoAdmin, enviarFeedBack, loginAdmin, nomeAdmin} from "../../Repository/admin/adminRepository.js"

import { Router } from "express";


const server = Router();

server.post('/admin/login', async (req, resp) => {
    try{
        const admin = req.body;

        if(!admin.email || !admin.senha) 
            throw new Error("Todos os campos são obrigatorios!");          

        const userlogado = await loginAdmin(admin);

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

server.get('/admin/nome', async (req,resp) =>{

    try {
        const admin = req.body;

        const name = await nomeAdmin(admin);
        console.log(name)
        resp.status(200).send({
            nome:name.nome
        })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        });
    }
})

server.get('/admin/motivo/adocao', async (req, resp) => {
    try {
        const result = await buscarUsuarioPorId();
        resp.send(result);
    } catch (error) {
        resp.send(error.message);
    }
});

server.post('/admin/feedback', async (req, resp) => {
    try {
        const info = req.body;
        const result = await enviarFeedBack(info);
        resp.send({
            x:result
        });
    } catch (error) {
        resp.status(400).send(error.message);
    }
});


server.get('/admin/info/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const result = await buscarInfoAdmin(id);
        resp.send(result);
    } catch (error) {
        resp.status.send(error);        
    }    
});


server.put('/admin/info', async (req, resp) => {
    try {
        const info = req.body;
        const result = await alterarInfoAdmin(info);
        console.log();
        resp.send({
            x:result.affectedRows
        });
    } catch (error) {
        resp.status(400).send(error);       
    }
});


export default server;