import { con } from './connection.js'

export async function buscarAnimal(nome){
    const comando = `
    select * from tb_animal_adocao
    where nm_animal like ?;
    `;
    const [resposta] = await con.query(comando, [`%${nome}%`]);
    return resposta;

}

export async function deletarCard(id){
    const comando =` delete from tb_animal_adocao
    where id_animal= ?:
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function consultarAnimais(){
    const comando = `
    select nm_animal,
		nr_idade,
		id_porte,
        id_raca,
        id_preferencia
 from tb_animal_adocao;
    `;
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function alterarInfoAnimal(animal,id){
    const comando =` 
    update tb_animal_adocao
    set nm_animal =?,
       nr_idade  = ?,
       ds_descricao = ?,
       id_usuario  = ?,
       id_porte	= ?,
       id_raca		= ?,
       id_preferencia =?,
       id_sexo			=?,
       id_tipo			=?
   where id_animal_adocao = ;
    `;
    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.descricao, animal.usuario, animal.porte, animal.raca, animal.preferencia, animal.sexo, animal.tipo, id]);
    return resposta.affectedRows;
}