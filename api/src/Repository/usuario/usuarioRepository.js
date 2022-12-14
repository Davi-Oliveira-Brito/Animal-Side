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
    select  *
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
           tb_usuario.nm_usuario,
           tb_animal_perdido.nm_animal
    from tb_comentario
    inner join tb_usuario on tb_usuario.id_usuario = tb_comentario.id_usuario
    inner join tb_animal_perdido on tb_animal_perdido.id_animal = tb_comentario.id_animal_perdido;`

    const [resultado] = await con.query(comando, []);
    return resultado;
}


export async function buscarAnimaisPerdidosPorId(id) {
    const command = `
    select  tb_animal_perdido.nm_animal			    as nome,
		    tb_animal_perdido.nr_idade			    as idade,
		    tb_animal_perdido.ds_telefone_contato   as telefone,
		    tb_animal_perdido.dt_dia_sumico		    as diaSumico,
		    tb_animal_perdido.ds_descricao		    as descricao,
		    tb_animal_perdido.bt_status			    as status,
		    tb_animal_perdido.img_animal			as imagem,
    
		    tb_porte.ds_porte					    as porte,
		    tb_porte.id_porte,                
    
		    tb_raca.ds_raca						    as raca,
		    tb_raca.id_raca,
    
		    tb_sexo.ds_sexo						    as sexo,
		    tb_sexo.id_sexo

    from 	tb_animal_perdido
    inner join tb_porte on tb_animal_perdido.id_porte = tb_porte.id_porte
    inner join tb_raca on tb_animal_perdido.id_raca = tb_raca.id_raca
    inner join tb_sexo on tb_animal_perdido.id_sexo = tb_sexo.id_sexo
    where id_animal = ?;
    `;

    const [result] = await con.query(command, [id]);
    return result;
} 

export async function buscarAnimaisPerdidos() {
    const command = `
    select  tb_animal_perdido.id_animal,
    tb_animal_perdido.nm_animal		as nome,
    tb_animal_perdido.nr_idade			    as idade,
    tb_animal_perdido.ds_telefone_contato   as telefone,
    date_format(dt_dia_sumico,'%d/%m/%y')   as diaSumico,
    tb_animal_perdido.ds_descricao		    as descricao,
    tb_animal_perdido.bt_status			    as status,
    tb_animal_perdido.img_animal			as imagem,
    
    tb_porte.ds_porte					    as porte,
    tb_porte.id_porte,                
    
    tb_raca.ds_raca						    as raca,
    tb_raca.id_raca,
    
    tb_sexo.ds_sexo						    as sexo,
    tb_sexo.id_sexo

from 	tb_animal_perdido
inner join tb_porte on tb_animal_perdido.id_porte = tb_porte.id_porte
inner join tb_raca on tb_animal_perdido.id_raca = tb_raca.id_raca
inner join tb_sexo on tb_animal_perdido.id_sexo = tb_sexo.id_sexo;
    `;

    const [result] = await con.query(command, []);
    return result 
}


export async function cadastroAnimalPerdido(animal) {
    const command = `insert into tb_animal_perdido(nm_animal, nr_idade, ds_telefone_contato, dt_dia_sumico, ds_descricao, bt_status, id_usuario, id_porte, id_raca, id_sexo)
                                            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const [result] = await con.query(command, [animal.nome,
                                               animal.idade,
                                               animal.telefone, 
                                               animal.diaSumico, 
                                               animal.descricao, 
                                               0, 
                                               animal.usuario, 
                                               animal.porte, 
                                               animal.raca, 
                                               animal.sexo            ]);
    return result.insertId;    
}

export async function alterarImagemPerdido(imagem, id) {
    const command = `update tb_animal_perdido set img_animal = ? where id_animal = ?`;

    const [result] = await con.query(command, [imagem, id]);
    return result.affectedRows;
}

export async function alterarAnimalPerdido(animal, id) {
    const command = `
    update tb_animal_perdido
    set nm_animal                   = ?,
        nr_idade                    = ?,
        ds_telefone_contato         = ?,
        dt_dia_sumico	            = ?,
        ds_descricao		        = ?,
        id_porte			        = ?,
        id_raca			            = ?,
        id_sexo			            = ?
    where id_animal                 = ?;`

   const result = await con.query(command, [animal.nome, animal.idade, animal.telefone, animal.diaSumico, animal.descricao, animal.porte, animal.raca, animal.sexo, id ]);
    return result.affectedRows
}

export async function enviarAdocaoAnimal(animalId, userId, comentario) {
    const outroComando = `
        select * from tb_motivo_adocao where id_animal_adocao = ?;
    `;

    const [check] = await con.query(outroComando, [userId]);
    if(!check.length){
        const command = `
        insert into tb_motivo_adocao(ds_comentario, id_usuario, id_animal_adocao)
                              values(?, ?, ?);
        `;
    
        const [result] = await con.query(command, [comentario, userId, animalId]);
        return result.insertId;
    }else{
        throw new Error('Voc?? j?? enviou uma mensagem de ado????o!');
    }
}

export async function enviarComentarioPerdido(comentario, userId, perdidoId) {
    const command = `
    insert into tb_comentario(ds_comentario, id_usuario, id_animal_perdido)
                       values(?, ?, ?);
    `;

    const [result] = await con.query(command, [comentario, userId, perdidoId]);
    return result.insertId;
} 

export async function buscarComentariosPerdidos(id) {
    const command = `
        select  id_comentario,
                ds_comentario,
                tb_comentario.id_usuario,
                id_animal_perdido,
                tb_usuario.nm_usuario
        from	tb_comentario
        inner join tb_animal_perdido on tb_comentario.id_animal_perdido = tb_animal_perdido.id_animal
        inner join tb_usuario on tb_comentario.id_usuario = tb_usuario.id_usuario
        where tb_comentario.id_animal_perdido = ?;
    `;

    const [result] = await con.query(command, [id]);
    return result
}

export async function mostrarFeedbacks(id){
    const command = `
    select 	tb_feedback.id_feedback,
    tb_feedback.ds_feedback,
    tb_animal_adocao.nm_animal,
    tb_feedback.id_usuario
from tb_feedback
inner join tb_animal_adocao on tb_animal_adocao.id_animal_adocao = tb_feedback.id_animal_adocao
where id_usuario = ?;
    `;

    const [result] = await con.query(command, [id]);
    return result;
}

export async function MeusInteresses(id) {
    const command = `
    select     id_motivo_adocao,
    tb_usuario.id_usuario,
    tb_animal_adocao.id_animal_adocao,
    
    tb_animal_adocao.ds_descricao             as descricao,
    tb_animal_adocao.nm_animal                 as nome,
    tb_animal_adocao.nr_idade            as idade,
    tb_animal_adocao.img_animal            as imagem,
    
    tb_preferencia.ds_preferencia        as preferencia,
    tb_preferencia.id_preferencia,
    
    tb_porte.ds_porte                        as porte,
    tb_porte.id_porte,                
    
    tb_raca.ds_raca                            as raca,
    tb_raca.id_raca,
    
    tb_sexo.ds_sexo                            as sexo,
    tb_sexo.id_sexo
    
    
from     tb_motivo_adocao
inner join     tb_usuario on tb_motivo_adocao.id_usuario = tb_usuario.id_usuario
inner join     tb_animal_adocao on tb_motivo_adocao.id_animal_adocao = tb_animal_adocao.id_animal_adocao 
inner join tb_porte on tb_animal_adocao.id_porte = tb_porte.id_porte
inner join tb_raca on tb_animal_adocao.id_raca = tb_raca.id_raca
inner join tb_sexo on tb_animal_adocao.id_sexo = tb_sexo.id_sexo
inner join tb_preferencia on tb_animal_adocao.id_preferencia = tb_preferencia.id_preferencia

where tb_motivo_adocao.id_usuario = ?;
    `;

    const [result] = await con.query(command, [id]);
    return result
}

export async function userPost(id){
    const command= `
    select  tb_animal_perdido.id_animal,
            tb_animal_perdido.nm_animal                as nome,
            tb_animal_perdido.nr_idade                as idade,
            tb_animal_perdido.ds_telefone_contato   as telefone,
            date_format(dt_dia_sumico,'%d/%m/%y')   as diaSumico,
            tb_animal_perdido.ds_descricao            as descricao,
            tb_animal_perdido.img_animal            as imagem,
    
            tb_porte.ds_porte                        as porte,
            tb_porte.id_porte,                
    
            tb_raca.ds_raca                            as raca,
            tb_raca.id_raca,
    
            tb_sexo.ds_sexo                            as sexo,
            tb_sexo.id_sexo

from     tb_animal_perdido
inner join tb_porte on tb_animal_perdido.id_porte = tb_porte.id_porte
inner join tb_raca on tb_animal_perdido.id_raca = tb_raca.id_raca
inner join tb_sexo on tb_animal_perdido.id_sexo = tb_sexo.id_sexo
inner join tb_usuario on tb_animal_perdido.id_usuario = tb_usuario.id_usuario
where tb_animal_perdido.id_usuario = ?;`

const [result] = await con.query(command, [id]);
return result;
}

export async function deletarAnimalPerdido(id) {
    const commando = `
        delete from tb_comentario where id_animal_perdido = ?
    `;

    const [r1] = await con.query(commando, [id]);
    console.log(r1);
    const command = `
        delete from tb_animal_perdido where id_animal = ?;
    `;
   
    const [result] = await con.query(command, [id]);
    return result.affectedRows
}