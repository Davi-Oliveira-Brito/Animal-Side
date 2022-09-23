import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginAdmin(email, senha) {
    const resposta = await api.post('/admin/loginAdmin', {
        email: email,
        senha: senha
    });
    return resposta
}