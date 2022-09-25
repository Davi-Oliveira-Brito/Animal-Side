import { con } from './connection.js'


export async function buscaRaca()
{
    const comando = `
    select 	*
    from	tb_raca;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPorte()
{
    const comando = `
    select 	*
    from	tb_porte;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPreferencia()
{
    const comando = `
    select 	*
    from	tb_preferencia;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function cadastrarAnimal(animal) {
    console.log(animal);
    const comando =
        `insert into tb_animal_adocao(nm_animal, nr_idade, ds_sexo, ds_descricao, id_usuario, id_porte, id_raca, id_comentario_adocao, id_preferencia)
                               values(?,?,?,?,?,?,?,?,?)`    

    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.sexo, animal.descricao, animal.admin, animal.porte, animal.raca, animal.comentario, animal.preferencia]);
    
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