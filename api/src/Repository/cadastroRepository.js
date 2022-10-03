import { con } from './connection.js'


export async function buscaRaca(){
    const comando = `
    select 	*
    from	tb_raca;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPorte(){
    const comando = `
    select 	*
    from	tb_porte;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPreferencia(){
    const comando = `
    select 	*
    from	tb_preferencia;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaSexo(){
    const comando = `
    select  *
    from	tb_sexo;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;
}

export async function buscaTipo(){
    const comando = `
    select *
    from tb_tipo;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;
}

export async function cadastrarAnimal(animal) {
    console.log(animal);
    const comando =
        `insert into tb_animal_adocao(nm_animal, nr_idade, ds_descricao, img_animal, id_usuario id_admin, id_porte, id_raca, id_comentario_adocao, id_preferencia, id_sexo, id_tipo)
        values(?,?,?,?,?,?,?,?,?,?,?,?);`    

    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.descricao, animal.imagem, animal.usuario, animal.admin, animal.porte, animal.raca, animal.comentario, animal.preferencia,animal.sexo, animal.tipo]);
    
    return resposta.insertId;
}

export async function alterarImagem(imagem, id) {
    const comando = 
            `UPDATE  tb_animal_adocao
                SET  img_animal             = ?
              WHERE  id_animal_adocao        = ?`;

    const [ resposta ] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

