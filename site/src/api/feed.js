import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function listarTodosAnimais() {
    const resposta = await api.get(`/feed/listarTodos`);
    return resposta.data
}


export async function filtroAnimal(nome, tipo, sexo, porte, maior, menor) {
    const resposta = await api.get(`/feed/animal/q?nome=${nome}&tipo=${tipo}&sexo=${sexo}&porte=${porte}&maior=${maior}&menor=${menor}`);
    return resposta.data
}