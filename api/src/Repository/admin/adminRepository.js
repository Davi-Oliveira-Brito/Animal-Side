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


export default async function buscarMotivosAdocao() {
    const command = `
    select 	id_motivo_adocao,
    tb_usuario.id_usuario,
    
    tb_motivo_adocao.ds_comentario,
    tb_motivo_adocao.id_animal_adocao,

    tb_usuario.nm_usuario,
    tb_usuario.ds_telefone,
    tb_usuario.ds_email,
    tb_usuario.vl_renda,
    tb_usuario.bt_animais_casa,
    tb_usuario.tp_residencia,

    tb_feedback.ds_feedback

    from 		tb_motivo_adocao
    inner join 	tb_usuario on tb_motivo_adocao.id_usuario = tb_usuario.id_usuario
    left join  tb_feedback on tb_motivo_adocao.id_usuario = tb_feedback.id_usuario;
    `;

    const [result] = await con.query(command, []);
    return result;
    
}


export async function enviarFeedBack(info) {
    const check = `
        select * from tb_feedback where id_usuario = ? 
    `;
    const [che] = await con.query(check, info.usuario);
    if(!che.length){
        const command = `
        insert into tb_feedback(ds_feedback, id_usuario, id_animal_adocao)
                         values(?, ?, ?);
        `;
        const [result] = await con.query(command, [info.comentario, info.usuario, info.animal_adocao]);
        return result;
    }else{
        throw new Error('Você já enviou uma mensagem pra esse usuario!');
    }

}

export async function buscarInfoAdmin(id) {
    const comman = `
        select * from tb_admin where id_admin = ?;
    `;

    const [result] = await con.query(comman, [id]);
    return result;
}

export async function alterarInfoAdmin(info) {
    const command = `
        update  tb_admin
        set     nm_admin = ?,
                ds_email = ?,
                ds_senha = ?
        where   id_admin = ?
    `;

    const [result] = await con.query(command, [info.nm_admin, info.ds_email, info.ds_senha, info.id_admin]);
    return result;
}