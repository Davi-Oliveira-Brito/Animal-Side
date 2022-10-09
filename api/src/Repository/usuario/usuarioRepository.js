import { con } from '../connection.js'

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

