import { con } from './connection.js'

export async function buscarAnimal(nome, tipo, sexo, porte, menor, maior){
    nome =  !nome ? '' : `%${nome}%`;
    tipo =  !tipo ? '' : `%${tipo}%`;
    sexo =  !sexo ? '' : `%${sexo}%`;
    porte =  !porte ? '' : `%${porte}%`;


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
    and     (? = '' or tb_tipo.nm_tipo like ?) 
    and     (? = '' or tb_sexo.ds_sexo like ? )
    and     (? = '' or tb_porte.ds_porte like ?)`;

    const [resposta] = await con.query(comando, [nome, nome, tipo, tipo, sexo, sexo, porte, porte]);
    return resposta;

}

export async function filtro(id) {
    const comando = `
        select   
        
        from tb_animal_adocao
        where id_tipo = ?
    `;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroSexo(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_sexo = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroPorte(id) {
    const comando = `
        select * from tb_animal_adocao
        where id_porte = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function filtroMenorIdade(idade){
    const comando = `
    select * from tb_animal_adocao
    where nr_idade <= ?
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
    select 	nm_animal 		                    as nome,
			nr_idade		                    as idade,
			ds_descricao	                    as descricao,
            img_animal		                    as imagem,
			tb_porte.ds_porte					as porte,
			tb_raca.ds_raca						as raca,
			tb_preferencia.ds_preferencia		as preferencia,
			tb_sexo.ds_sexo						as sexo,
			tb_tipo.nm_tipo						as tipo

    from 		tb_animal_adocao
    inner join tb_porte on tb_animal_adocao.id_porte = tb_porte.id_porte
    inner join tb_raca on tb_animal_adocao.id_raca = tb_raca.id_raca
    inner join tb_sexo on tb_animal_adocao.id_sexo = tb_sexo.id_sexo
    inner join tb_tipo on tb_animal_adocao.id_tipo = tb_tipo.id_tipo
    inner join tb_preferencia on tb_animal_adocao.id_preferencia = tb_preferencia.id_preferencia`;
    const [resposta] = await con.query(comando);
    return resposta;
}

