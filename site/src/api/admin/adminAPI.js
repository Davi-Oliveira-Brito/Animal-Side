import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginAdmin(email, senha) {
    const resposta = await api.post('/admin/login', {
        email: email,
        senha: senha
    });
    return resposta.data;
}

export async function nomeAdmin() {
    const resposta = await api.get('/admin/nome');
    return resposta.data;
}

export async function buscarComentarios() {
    const resp = await api.get(`/admin/motivo/adocao`);
    console.log(resp);
    return resp.data;
}

export async function enviarFeedBack(info) {
    const resp = await api.post('/admin/feedback', {
        comentario: info.comentario,
        usuario:info.usuario,
        animal_adocao: info.animal_adocao
    });
    return resp.data;
}

export async function buscarAdminInfo(id) {
    const resp = await api.get(`/admin/info/${id}`);
    return resp.data;
}

export async function alterarInfoAdmin(info) {
    const resp = await api.put('/admin/info', info);
    return resp.data;
}