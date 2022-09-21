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