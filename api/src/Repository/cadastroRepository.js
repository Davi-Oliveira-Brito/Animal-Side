import { con } from './connection.js'


export async function buscaRaca()
{
    const comando = `
    select 	ds_raca as raca
    from	tb_raca;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPorte()
{
    const comando = `
    select 	ds_porte as porte
    from	tb_porte;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function buscaPreferencia()
{
    const comando = `
    select 	ds_preferencia as preferencia 
    from	tb_preferencia;
    `;

    const [resposta] = await con.query(comando, []);
    return resposta;   
}

export async function cadastrarAnimal(animal) {
    const comando =
        `INSERT INTO tb_animal_adocao(nm_animal,nr_idade,ds_sexo,ds_descricao,id_porte,id_raca,id_comentario_adocao,id_preferencia)
              VALUES(?, ?, ?, ?, ?, ?, ?, ?)`    

    const [ resposta ] = await con.query(comando[animal.adocao, animal.idade, animal.sexo, animal.descricao, animal.porte, animal.raca, animal.comentario, animal.preferencia]);
    
    return resposta;
}