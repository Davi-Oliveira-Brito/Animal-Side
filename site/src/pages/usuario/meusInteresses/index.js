import React, { useEffect, useState, useSearchParams } from 'react';
import { toast } from 'react-toastify';
import storage from 'local-storage';

import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import NavBarAdmin from '../../../components/navBarAdmin';
import DadoUser from '../../../components/dados';
import CardMeusInteresses from '../../../components/cardMeusInteresses';


import { Meusinteresses } from '../../../api/usuario/usuarioAPI';


export default function UseInteresses() {
    const [animais, setAnimais] = useState([]);


    async function carregarAnimais() {
        try {

            const r = await Meusinteresses(storage('usuario-logado').id);
            console.log(r);
            setAnimais(r.resposta);
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }
    useEffect(() => {
        carregarAnimais();
    }, []);
    return (
        <main className='meus-interesses-page'>
            <SidebarUser />
            <div className='right'>
                <div><NavBarAdmin /></div>
                <div className='comp1'>
                    <DadoUser
                        nome={storage('usuario-logado').nome}
                        regiao={storage('usuario-logado').endereco} />
                </div>
                <div className='comp2'>
                    {animais.map(item => {
                        return (
                            <CardMeusInteresses
                                id={item.id_animal_adocao}
                                imagem={item.imagem}
                                nome={item.nome}
                                raca={item.raca}
                                porte={item.porte}
                                idade={item.idade}
                                preferencia={item.preferencia}
                                descricao={item.descricao} 
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );

}