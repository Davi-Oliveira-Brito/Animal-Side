import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginAdmin() {
    const resposta = await api.post('/admin/login');
    return resposta.data;
}

export async function nomeAdmin() {
    const resposta = await api.get('/admin/nome');
    return resposta.data;
}