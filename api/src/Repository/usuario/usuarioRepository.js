import { con } from '../connection.js'

export async function cadastrarUsuario(usuario) {
    const commando = `
        insert into tb_usuario(NM_USUARIO, DT_NASCIMENTO, DS_TELEFONE, DS_ENDERECO, VL_RENDA, QTD_PESSOAS_CASA, BT_ANIMAIS_CASA, TM_TEMPO_SOZINHO_ANIMAL, DS_EMAIL, DS_SENHA)
                        values(?,?,?,?,?,?,?,?,?,?);
    `;

    const [ result ] = await con.query(commando, [
        usuario.nome,
        usuario.nascimento,
        usuario.telefone,
        usuario.endereco,
        usuario.renda,
        usuario.pessoas_casa,
        usuario.animais_casa,
        usuario.tempo_sozinho,
        usuario.email,
        usuario.senha      
    ]);

    return result.insertId;
}

export async function loginUsuario (usuario) {
    const comando = `
    select  id_usuario as id,
            ds_email as email,
            ds_senha as senha
    from    tb_usuario
    where   ds_email = ? 
    and     ds_senha = ?;
    `;

    const [userlogado]  = await con.query(comando, [usuario.email, usuario.senha]); 
    return userlogado[0];
}

