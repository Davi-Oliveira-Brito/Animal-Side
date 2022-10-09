import { con } from './connection.js'

export async function buscaAnimal(nome, sexo, porte, raca, menor, maior){
    if(!raca || raca === undefined) raca = ''
    if(!sexo || sexo === undefined) sexo = ''
    if(!porte || porte === undefined) porte = ''
    if(!menor || menor === undefined) menor = ''
    if(!maior || maior === undefined) maior = ''
    
    const comando = `
    select  nm_animal 		                    as nome,
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
            tb_sexo.id_sexo,
            
            tb_tipo.nm_tipo						as tipo,
            tb_tipo.id_tipo
            
    from tb_animal_adocao
    inner join tb_porte on tb_animal_adocao.id_porte = tb_porte.id_porte
    inner join tb_raca on tb_animal_adocao.id_raca = tb_raca.id_raca
    inner join tb_sexo on tb_animal_adocao.id_sexo = tb_sexo.id_sexo
    inner join tb_tipo on tb_animal_adocao.id_tipo = tb_tipo.id_tipo
    inner join tb_preferencia on tb_animal_adocao.id_preferencia = tb_preferencia.id_preferencia
    
    where   (? = '' or nm_animal like ?) 
    and     (? = '' or tb_tipo.id_raca = ?) 
    and     (? = '' or tb_sexo.id_sexo = ? )
    and     (? = '' or tb_porte.id_porte = ?)`;

    const [resposta] = await con.query(comando, [nome, `%${nome}%`, raca, raca, sexo, sexo, porte, porte]);
    return resposta;

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