import { con } from '../connection.js'

export async function cadastroAnimal(animal) {
    const comando =
        `insert into tb_animal_adocao(nm_animal, nr_idade, ds_descricao, id_admin, id_porte, id_raca, id_preferencia, id_sexo )
        values(?,?,?,?,?,?,?,?);`    

    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.descricao, animal.admin, animal.porte, animal.raca, animal.preferencia, animal.sexo]);
    
    return resposta.insertId;
}

export async function alterarAnimal(animal,id){
    const comando =` 
    update tb_animal_adocao
    set nm_animal           = ?,
       nr_idade             = ?,
       ds_descricao         = ?,
       id_admin             = ?,
       id_porte	            = ?,
       id_raca		        = ?,
       id_preferencia       = ?,
       id_sexo			    = ?
   where id_animal_adocao   = ?;
    `;
    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.descricao, animal.usuario, animal.porte, animal.raca, animal.preferencia, animal.sexo, id]);
    return resposta.insertId;
}

export async function deletarAnimal(id){
    const comando =` 
        delete from tb_animal_adocao
        where       id_animal_adocao   = ?
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarImagem(imagem, id) {
    const comando = 
            `UPDATE  tb_animal_adocao
                SET  img_animal             = ?
              WHERE  id_animal_adocao       = ?`;

    const [ resposta ] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}
