import React, { useEffect } from 'react';
import './index.scss'
import NavBar from '../../../components/navBar/index.js'
import SideBar from '../../../components/sideBar/index.js'
import CardFeed from '../../../components/cardFeed/index.js'

import { adocaoCard } from '../../../api/feed.js';

import { useState } from 'react';

export default function () {
    const [animais, setAnimais] = useState([]);

    async function carregarAnimais() {
        let r = await adocaoCard();
        setAnimais(r);
    }

    console.log(animais);

    useEffect(() => {
        carregarAnimais();
    }, []);
    return (
        <main className="feedmain">
            <NavBar />
            <div className="top">
                <img className="dog-procure" src="/assets/images/orangeDog.png" alt="" />
                <input className="pesquisa" type="text" placeholder="Procure seu Bichinho..." />
            </div>
            <div className="bottom">
                <div className="comp-side">
                    <SideBar />
                </div>
                <div className='card-s'>
                    {animais.map(item => {
                        return (
                            <CardFeed
                                nome={item.nome}
                                idade={item.idade}
                                descricao={item.descricao}
                                imagem={item.idade}
                                porte={item.porte}
                                raca={item.raca}
                                preferencia={item.preferencia}
                                sexo={item.sexo}
                                tipo={item.tipo}
                            />
                        );
                    })}
                </div>

            </div>
        </main>
    )
}