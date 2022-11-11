import { con } from './connection.js'

export async function buscaAnimal(nome, sexo, porte, raca, preferencia, menor, maior){
    if(nome === 'undefined' || nome === undefined) nome = ''
    if(raca == 'undefined' || raca == undefined) raca = ''
    if(sexo == 'undefined' || sexo == undefined) sexo = ''
    if(porte == 'undefined' || porte == undefined) porte = ''
    if(preferencia == 'undefined' || preferencia == undefined) preferencia = ''
    if(menor == 'undefined' || menor == undefined) menor = ''
    if(maior == 'undefined' || maior == undefined) maior = ''

    const comando = `
    select  id_animal_adocao,
            nm_animal 		                    as nome,
            nr_idade		                    as idade,
            ds_descricao	                    as descricao,
            img_animal		                    as imagem,
            
            tb_porte.ds_porte					as porte,
            tb_porte.id_porte,                
            
            tb_raca.ds_raca						as raca,
            tb_raca.id_raca,
            
            tb_preferencia.ds_preferencia		as preferencia,
            tb_preferencia.id_preferencia,

            tb_sexo.ds_sexo						as sexo,
            tb_sexo.id_sexo
            
    from tb_animal_adocao
    inner join tb_porte on tb_animal_adocao.id_porte = tb_porte.id_porte
    inner join tb_raca on tb_animal_adocao.id_raca = tb_raca.id_raca
    inner join tb_sexo on tb_animal_adocao.id_sexo = tb_sexo.id_sexo
    inner join tb_preferencia on tb_animal_adocao.id_preferencia = tb_preferencia.id_preferencia
    
    where   (? = '' or nm_animal like ?) 
    and     (? = '' or tb_raca.id_raca = ?) 
    and     (? = '' or tb_sexo.id_sexo = ? )
    and     (? = '' or tb_porte.id_porte = ?)
    and     (? = '' or tb_preferencia.id_preferencia = ?)
    and     (? = '' or nr_idade > ?)
    and     (? = '' or nr_idade < ?)`;

    const [resposta] = await con.query(comando, [nome, `%${nome}%`, raca, raca, sexo, sexo, porte, porte, preferencia, preferencia, maior, maior, menor, menor]);
    return resposta;

}

export async function buscaAnimalId(id) {
    const command = `
        select  nm_animal           as nome,
                nr_idade            as idade,
                ds_descricao        as descricao,
                img_animal          as imagem,
                id_porte            as porte,
                id_raca             as raca,
                id_preferencia      as preferencia,
                id_sexo             as sexo
        from    tb_animal_adocao     
        where   id_animal_adocao = ?;
    `
    const [resposta] = await con.query(command, [id]);
    return resposta[0];
}

export async function buscaSexo() {
    const command = `
        select  id_sexo,
                ds_sexo     as sexo
        from    tb_sexo
    `;

    const [resposta] = await con.query(command, []);
    return resposta
}

export async function buscaRaca() {
    const command = `
        select  id_raca,
                ds_raca     as raca
        from    tb_raca
    `;

    const [resposta] = await con.query(command, []);
    return resposta
}

export async function buscaPorte() {
    const command = `
        select  id_porte,
                ds_porte     as porte
        from    tb_porte
    `;

    const [resposta] = await con.query(command, []);
    return resposta
}
export async function buscaPreferencia() {
    const command = `
        select  id_preferencia,
                ds_preferencia     as preferencia
        from    tb_preferencia
    `;

    const [resposta] = await con.query(command, []);
    return resposta
}

export async function buscarAnimalPerdidoId(id) {
    const comando = `
        select nm_animal                as nome,
               nr_idade                 as idade,
               ds_telefone_contato      as telefone_contato,
               dt_dia_sumico            as dia_sumico,
               ds_descricao             as descricao,
               bt_status                as status,
               img_animal               as imagem,
               id_usuario               as usuario,
               id_porte                 as porte,
               id_raca                  as raca,
               id_sexo                  as sexo,
               id_tipo                  as tipo, 
        from   tb_animal_perdido
        where  id_animal = ?;      
        `;
    
        const [resposta] = await con.query(comando, [id]);
        return resposta[0]
}

export async function deletarAnimalPerdido(id) {
    const comando = `
        delete from tb_animal_perdido
        where id_animal = ?;
    `;

    const [resposta] = await con.query(comando, [id]);
    return resposta[0]
}

export async function alterarimg(imagem, id) {
    const comando = 
            `UPDATE  tb_animal_perdido
                SET  img_animal             = ?
              WHERE  id_animal       = ?`;

    const [ resposta ] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function cadastroAnimal(animal) {
    const comando =
        `insert into tb_animal_perdido(nm_animal, nr_idade, ds_telefone_contato, dt_dia_sumico, ds_descricao, bt_status, id_usuario, id_porte, id_raca, id_preferencia, id_sexo, id_tipo)
        values(?,?,?,?,?,?,?,?,?,?);`;    

    const [resposta] = await con.query(comando, [animal.nome, animal.idade, animal.telefone_contato, animal.dia_sumiço, animal.descricao, animal.status, animal.usuario, animal.porte, animal.raca, animal.preferencia, animal.sexo, animal.tipo]);
    
    return resposta.insertId;
}

