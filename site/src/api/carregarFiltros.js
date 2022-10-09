import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function buscarRacas() {
    const resp = await api.get('/admin/buscaRaca');
    return resp.data;
}

export async function buscarPreferencia(){
    const resp = await api.get('/admin/buscaPreferencia');
    return resp.data;
}

export async function buscarPorte(){
    const resp = await api.get('/admin/buscaPorte');
    return resp.data;
}

export async function buscarTipo(){
    const resp = await api.get('/admin/buscaTipo');
    return resp.data;
}

export async function buscarSexo(){
    const resp = await api.get('/admin/buscaSexo');
    return resp.data;
}