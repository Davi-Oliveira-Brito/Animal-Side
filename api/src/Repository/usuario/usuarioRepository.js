import { con } from '../connection.js'

export async function cadastrarUsuario(usuario) {
    const commando = `
        insert into tb_usuario(NM_USUARIO, DT_NASCIMENTO, DS_TELEFONE, DS_ENDERECO, VL_RENDA, QTD_PESSOAS_CASA, BT_ANIMAIS_CASA, TM_TEMPO_SOZINHO_ANIMAL, DS_EMAIL, DS_SENHA, TP_RESIDENCIA)
                        values(?,?,?,?,?,?,?,?,?,?,?);
    `;

    const [result] = await con.query(commando, [
        usuario.nome,
        usuario.nascimento,
        usuario.telefone,
        usuario.endereco,
        usuario.renda,
        usuario.pessoas_casa,
        usuario.animais_casa,
        usuario.tempo_sozinho,
        usuario.email,
        usuario.senha,
        usuario.tipo_residencia
    ]);

    return result.insertId;
}

export async function loginUsuario(usuario) {
    const comando = `
    select  id_usuario as id,
            ds_email as email,
            ds_senha as senha
    from    tb_usuario
    where   ds_email = ? 
    and     ds_senha = ?;
    `;

    const [userlogado] = await con.query(comando, [usuario.email, usuario.senha]);
    return userlogado[0];
}

export async function listarInformacoes(id) {
    const command = `
        select * from tb_usuario where ID_USUARIO = ? 
    `;
    const [result] = await con.query(command, [id]);
    return result[0];
}

export async function alterarInformacoes(usuario, id) {
    console.log(usuario);
    const command = `
    update 	tb_usuario
    set 	NM_USUARIO = ?,
            DT_NASCIMENTO = ?,
            DS_TELEFONE = ?,
            DS_ENDERECO = ?,
            VL_RENDA = ?,
            QTD_PESSOAS_CASA = ?,
            BT_ANIMAIS_CASA = ?,
            TM_TEMPO_SOZINHO_ANIMAL = ?,
            DS_EMAIL = ?,
            DS_SENHA = ?,
            TP_RESIDENCIA = ?
    where 	ID_USUARIO = ?
    `;

    const [result] = await con.query(command, [
        usuario.NM_USUARIO,
        usuario.DT_NASCIMENTO,
        usuario.DS_TELEFONE,
        usuario.DS_ENDERECO,
        usuario.VL_RENDA,
        usuario.QTD_PESSOAS_CASA,
        usuario.BT_ANIMAIS_CASA,
        usuario.TM_TEMPO_SOZINHO_ANIMAL,
        usuario.DS_EMAIL,
        usuario.DS_SENHA,
        usuario.TP_RESIDENCIA,
        id
    ]);

    return result.affectedRows
}


export async function mostrarComentarios() {
    const comando = `
    select tb_comentario.id_comentario,
           tb_comentario.ds_comentario,
           tb_usuario.id_usuario,
           tb_usuario.nm_usuario
    from tb_comentario
    inner join tb_usuario on tb_usuario.id_usuario = tb_comentario.id_usuario`;

    const [resultado] = await con.query(comando, []);
    return resultado;
}


