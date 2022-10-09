import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function cadastroAnimal(animal) {
    const resposta = await api.post('/admin/animal', {
        nome:           animal.nome,
        idade:          animal.idade,
        descricao:      animal.descricao,
        porte:          animal.porte,
        admin:          animal.null,
        porte:          animal.porte,
        raca:           animal.raca,
        preferencia:    animal.preferencia,
        sexo:           animal.sexo,
    });

    return resposta.data;
}

export async function alterarImagem(imagem, id) {
    const resposta = await api.put(`/admin/${id}/animal/imagem`);
    return resposta.data;
}

export async function alterarAnimal(animal, id) {
    const resposta = await api.put(`/admin/${id}/animal`, {
        nome:           animal.nome,
        idade:          animal.idade,
        descricao:      animal.descricao,
        porte:          animal.porte,
        admin:          animal.null,
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