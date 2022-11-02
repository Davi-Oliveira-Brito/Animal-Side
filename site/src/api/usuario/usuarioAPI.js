import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export async function cadastroAnimalPerdido(animal, usuario) {
    const resposta = await api.post('/usuario/animal', {
        nome:           animal.nome.trim(),
        idade:          animal.idade,
        descricao:      animal.descricao.trim(),
        porte:          animal.porte,
        usuario:        usuario,
        raca:           animal.raca,
        sexo:           animal.sexo,
        tipo:           animal.tipo,
        dia:            animal.dia,
        telefone:       animal.telefone,
    });

    return resposta.data;
}