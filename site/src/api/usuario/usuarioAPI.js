import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/usuario/login', {
        email: email,
        senha: senha
    });
    return resposta.data
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
    return resposta.data;
}

export async function cadastroAnimalPerdido(animal, usuario) {
    const resposta = await api.post('/usuario/animal/perdido', {
        nome:           animal.nome.trim(),
        idade:          animal.idade,
        descricao:      animal.descricao.trim(),
        porte:          animal.porte,
        usuario:        usuario,
        raca:           animal.raca,
        sexo:           animal.sexo,
        diaSumico:      animal.diaSumico,
        telefone:       animal.telefone,
    });

    return resposta.data;
}

export async function buscarAnimalPerdidoId(id){
    const resp = await api.get(`/usuario/animal/${id}/perdido/id`);
    return resp.data;
}

export async function buscarAnimalPerdido() {
    const resp = await api.get('/usuario/animal/perdido');
    return resp.data;
}

export async function listarInformacoes(id) {
    const resp = await api.get(`/usuario/informacao/${id}`);
    return resp.data;
}

export async function alterarInformacoes(usuario, id) {
    const resp = await api.put(`/usuario/${id}`, {
       NM_USUARIO:              usuario.NM_USUARIO,
       DT_NASCIMENTO:           usuario.DT_NASCIMENTO ? String(usuario.DT_NASCIMENTO.substring(0, 10)): null,
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

export async function enviarImagemPerdido(imagem, id){
    let formData = new FormData();
    formData.append('imagem', imagem);
    const resp = await api.put(`/usuario/${id}/animal/perdido/imagem`, formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resp;
}

export async function pegarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}

export async function mostrarComentariosFront(){
    const comentario = await api.get(`/usuario/comentarios`);

    return comentario.data;
}

export async function alterarAnimalPerdido(animal, id) {
    console.log(animal, id);
    const resp = await api.put(`/usuario/animal/${id}/perdido`, {
        nome:       animal.nome,
        idade:      animal.idade,
        descricao:  animal.descricao,
        porte:      animal.porte,
        usuario:    animal.usuario,
        raca:       animal.raca,
        sexo:       animal.sexo,
        diaSumico:  animal.diaSumico,
        telefone:   animal.telefone
    });

    return resp.data;
}

export async function enviarAdocaoAnimal(animalId, userId, comentario) {
    console.log(animalId);
    const resp = await api.post(`/usuario/${userId}/adocao/animal/${animalId}`, {
        comentario: comentario
    });

    return resp.data;
}


export async function enviarComentarioPerdido(comentario, userId, perdidoId) {
    const resp = await api.post(`/usuario/${userId}/comentario/animal/perdido/${perdidoId}`, {
        comentario: comentario
    });
    return resp.data;
}

export async function buscarComentariosPerdidos(id) {
    const resp = await api.get(`/usuario/comentarios/animal/perdido/${id}`);
    return resp.data;
}