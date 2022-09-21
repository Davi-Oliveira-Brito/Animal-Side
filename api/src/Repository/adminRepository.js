import { con } from './connection.js'

export async function loginAdmin (admin)
{
    const comando = `
    select  id_admin as id,
            ds_email as email,
            ds_senha as senha
    from    tb_admin
    where   ds_email = ? 
    and     ds_senha = ?;
    `;

    const [ userlogado ] = await con.query(comando, [admin.email, admin.senha, admin.id]); 
    
    return userlogado[0];
}