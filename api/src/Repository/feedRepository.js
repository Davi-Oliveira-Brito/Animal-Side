import { con } from './connection.js'

export default async function filtroTipo(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_tipo = ? ;
    `;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export default async function filtroSexo(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_sexo = ?;`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export default async function filtroPorte(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_porte = ?;`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export default async function filtroIdade(idade){
    const comando = `
    select * from tb_animal_adocao
    where nr_idade <= ?;
    `;

    const [resposta] = await con.query(comando, [idade]);
    return resposta;

}