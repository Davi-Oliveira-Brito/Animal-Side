import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function cadastrarUsuario(usuario) {
    const resposta = await api.post('/usuario/cadastrar', {
        nome: usuario.nome,                        
        nascimento: null,
        telefone: usuario.telefone,
        endereco: null ,       
        renda: null,   
        pessoas_casa: null,
        animais_casa: null,     
        tempo_sozinho: null,  
        email: usuario.email,
        senha: usuario.senha  
    });
    console.log(resposta);
    return resposta.data;
}

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