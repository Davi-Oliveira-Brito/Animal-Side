import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function cadastrarAnimal(nome, idade, descricao, porte, raca, preferencia,tipo,sexo){
    const resp = await api.post('/admin/adocao',{
        nome: nome,
        idade:idade,
        descricao:descricao,
        porte:porte,
        usuario: null,
        admin:null,
        porte:porte,
        raca:raca,
        comentario:null,
        preferencia:preferencia,
        sexo:sexo,
        tipo:tipo
    });
    return resp.data;
}

export async function enviarImagem(imagem, id){
    let formData = new FormData();
    formData.append('imagem', imagem);
    const resp = await api.put(`/admin/${id}/imagem`, formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resp.status;
}

export function pegarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}
