import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function buscaAnimal(nome, sexo, porte, raca, menor, maior) {
    const resposta = await api.get(`/animal/q?nome=${nome}&sexo=${sexo}&porte=${porte}&raca=${raca}`);
    return resposta.data;
}

export async function buscaFiltro() {
    const sexo = await api.get(`/animal/sexo`);
    const porte = await api.get(`/animal/porte`);
    const raca = await api.get(`/animal/raca`);
    const preferencia = await api.get(`/animal/preferencia`);

    return {
        sexo: sexo.data,
        porte: porte.data,
        raca: raca.data,
        preferencia: preferencia.data
    }
}