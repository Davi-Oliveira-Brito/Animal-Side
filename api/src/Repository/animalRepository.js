import { con } from './connection.js'

export async function buscarPorFiltro(nome, tipo, sexo, porte, menor, maior){
    if(!tipo || tipo === undefined) tipo = ''
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
    and     (? = '' or tb_tipo.id_tipo = ?) 
    and     (? = '' or tb_sexo.id_sexo = ? )
    and     (? = '' or tb_porte.id_porte = ?)`;

    const [resposta] = await con.query(comando, [nome, `%${nome}%`, tipo, tipo, sexo, sexo, porte, porte]);
    return resposta;

}

export async function listarTodosAnimais(){
    const comando = `
    select 	id_animal                           ,
            nm_animal 		                    as nome,
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

