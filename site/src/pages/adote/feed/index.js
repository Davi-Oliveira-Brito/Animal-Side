import React, { useEffect } from 'react';
import './index.scss'
import NavBar from '../../../components/navBar/index.js'
import SideBar from '../../../components/sideBar/index.js'
import CardFeed from '../../../components/cardFeed/index.js'
import { useState } from 'react';

import { listarTodosAnimais, filtroAnimal } from '../../../api/feed.js';


export default function () {
    const [animais, setAnimais] = useState([]);
    const [nome, setNome] = useState('');

    async function carregarAnimais() {
        let r = await listarTodosAnimais();
        setAnimais(r);
    }
    useEffect(() => {
        carregarAnimais();
    }, []);
    return (
        <main className="feedmain">
            <NavBar />
            <div className="top">
                <img className="dog-procure" src="/assets/images/orangeDog.png" alt="" />
                <input value={nome} onChange={(e)=> setNome(e.target.value)} className="pesquisa" type="text" placeholder="Procure seu Bichinho..." />
            </div>
            <div className="bottom">
                <div className="comp-side">
                    <SideBar
                    setAnimais={setAnimais}
                    nome={nome}
                    />
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