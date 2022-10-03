import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/usuario/loginUsuario', {
        email: email,
        senha: senha
    });
    return resposta
}