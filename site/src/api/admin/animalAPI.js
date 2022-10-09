import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function buscaAnimalId(id) {
    const resposta = await api.get(`/animal/id/${id}`);
    return resposta.data;
}

export async function cadastroAnimal(animal, admin) {
    const resposta = await api.post('/admin/animal', {
        nome:           animal.nome,
        idade:          animal.idade,
        descricao:      animal.descricao,
        porte:          animal.porte,
        admin:          admin,
        porte:          animal.porte,
        raca:           animal.raca,
        preferencia:    animal.preferencia,
        sexo:           animal.sexo,
    });

    return resposta.data;
}


export async function alterarAnimal(animal, id, admin) {
    const resposta = await api.put(`/admin/${id}/animal`, {
        nome:           animal.nome,
        idade:          animal.idade,
        descricao:      animal.descricao,
        porte:          animal.porte,
        admin:          admin,
        porte:          animal.porte,
        raca:           animal.raca,
        preferencia:    animal.preferencia,
        sexo:           animal.sexo,
    })
    return resposta.data;
}

export async function deletarAnimal(id) {
    const resposta = await api.delete(`/admin/${id}/animal`);
    return resposta.data;
}

export async function enviarImagem(imagem, id){
    let formData = new FormData();
    formData.append('imagem', imagem);
    const resp = await api.put(`/admin/${id}/animal/imagem`, formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resp;
}

export function pegarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}