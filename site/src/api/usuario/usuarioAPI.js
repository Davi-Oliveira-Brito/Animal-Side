import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/usuario/loginUsuario', {
        email: email,
        senha: senha
    });
    return resposta
}

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
        senha: usuario.senha,
        tipo_residencia: null
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

export async function listarInformacoes(id) {
    const resp = await api.get(`/usuario/informacao/${id}`);
    return resp.data;
}

export async function alterarInformacoes(usuario, id) {
    console.log(usuario);
    const resp = await api.put(`/usuario/${id}`, {
       NM_USUARIO:              usuario.NM_USUARIO,
       DT_NASCIMENTO:           usuario.DT_NASCIMENTO.substring(0, 10),
       DS_TELEFONE:             usuario.DS_TELEFONE,
       DS_ENDERECO:             usuario.DS_ENDERECO,
       VL_RENDA:                usuario.VL_RENDA,
       QTD_PESSOAS_CASA:        usuario.QTD_PESSOAS_CASA,
       BT_ANIMAIS_CASA:         usuario.BT_ANIMAIS_CASA,
       TM_TEMPO_SOZINHO_ANIMAL: usuario.TM_TEMPO_SOZINHO_ANIMAL,
       DS_EMAIL:                usuario.DS_EMAIL,
       DS_SENHA:                usuario.DS_SENHA,
       TP_RESIDENCIA:           usuario.TP_RESIDENCIA
    });

    return resp.data;
}