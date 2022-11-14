import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import NavBarAdmin from '../../../components/navBarAdmin';
import DadoUser from '../../../components/dados';
import CardMeusInteresses from '../../../components/cardMeusInteresses';


import { buscaAnimal } from '../../../api/animalAPI';


export default function UseInteresses() {
    const [animais, setAnimais] = useState([]);

    async function carregarAnimais() {
        try {
            const r = await buscaAnimal();
            setAnimais(r);
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }
    useEffect(() => {
        carregarAnimais();
    }, []);
    return (
        <main className='meus-interesses-page'>
            <SidebarUser/>
            <div className='right'>
                <div><NavBarAdmin /></div>
                <div className='comp1'>
                    <DadoUser />
                </div>
                <div className='comp2'>
                {animais.map(item => {
                        return (
                            <CardMeusInteresses
                                imagem={item.imagem}
                                nome={item.nome}
                                raca={item.raca}
                                porte={item.porte}
                                idade={item.idade}
                                preferencia={item.preferencia}
                                descricao={item.descricao} />
                        )
                    })}
                </div>
            </div>
        </main>
    );

}