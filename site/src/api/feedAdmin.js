import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function listarAnimal() {
    const resposta = await api.get('/feedAdmin');
    return resposta.data;
}

export async function deletarAnimal(id) {
    const resposta = await api.get(`/feedadmin/delete/${id}`);
    return resposta;
}

export async function alterarAnimal() {
    const resposta = await api.put('');

}