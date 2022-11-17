import { con } from '../connection.js'

export async function loginAdmin (admin) {
    const comando = `
    select  id_admin as id,
            ds_email as email,
            ds_senha as senha
    from    tb_admin
    where   ds_email = ? 
    and     ds_senha = ?;
    `;

    const [userlogado]  = await con.query(comando, [admin.email, admin.senha]); 
    console.log(userlogado);
    return userlogado[0];
}

export async function nomeAdmin(admin) {
    const comando = `
    select 	nm_admin as nome
    from 	tb_admin
    where	id_admin = ?;
    `;

    const [resposta] = await con.query(comando, [admin.id]);
    return resposta[0];
} 


export default async function buscarMotivosAdocao(id_animal) {
    const command = `
        select * from tb_motivo_adoca where id_animal_adocao = ?
    `;

    const [result] = await con.query(command, [id_animal]);
    return result
    
}