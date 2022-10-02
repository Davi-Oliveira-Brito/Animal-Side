import { con } from './connection.js'

export async function filtroTipo(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_tipo = ? ;
    `;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroSexo(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_sexo = ?;`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroPorte(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_porte = ?;`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroMenorIdade(idade){
    const comando = `
    select * from tb_animal_adocao
    where nr_idade <= ?;
    `;

    const [resposta] = await con.query(comando, [idade]);
    return resposta;

}


export async function filtroMaiorIdade(idade){
    const comando = `
    select * from tb_animal_adocao
    where nr_idade >= ?;
    `;

    const [resposta] = await con.query(comando, [idade]);
    return resposta;

}



export async function adocaoCard(){
    const comando = `
    select 	img_animal,
		    nm_animal,
            id_raca,
            ds_descricao,
            nr_idade
    from 	tb_animal_adocao;
    `;

    const [resposta] = await con.query(comando);
    return resposta;
}