import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function buscarRacas() {
    const resp = await api.get('/admin/buscaRaca');
    console.log(resp);
    return resp.data;
}
