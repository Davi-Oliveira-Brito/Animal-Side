import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function buscarCard(nome) {
    const resposta = await api.get(`/feed/buscaNome/q?nome=${nome}`);
    return resposta.data
}

export async function filtroTipo(id) {
    const resposta = await api.get(`/feed/filtroTipo/q?id=${id}`);
    return resposta.data
}

export async function filtroSexo(id) {
    const resposta = await api.get(`/feed/filtroSexo/q?id=${id}`);
    return resposta.data
}

export async function filtroPorte(id) {
    const resposta = await api.get(`/feed/filtroPorte/q?id=${id}`);
    return resposta.data
}

export async function filtroMenorIdade(idade) {
    const resposta = await api.get(`/feed/buscaNome/q?idade=${idade}`);
    return resposta.data
}

export async function filtroMaiorIdade(idade) {
    const resposta = await api.get(`/feed/buscaNome/q?idade=${idade}`);
    return resposta.data
}

export async function adocaoCard() {
    const resposta = await api.get(`/feed/listarCards`);
    return resposta.data
}