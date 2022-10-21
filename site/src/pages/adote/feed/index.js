import React, { useEffect } from 'react';
import './index.scss'
import NavBar from '../../../components/navBar/index.js'
import SideBar from '../../../components/sideBar/index.js'
import CardFeed from '../../../components/cardFeed/index.js'
import { useState } from 'react';

import { buscaAnimal } from '../../../api/animalAPI.js';


export default function AdoteFeed() {
    const [animais, setAnimais] = useState([]);
    const [nome, setNome] = useState('');

    async function carregarAnimais() {
        let r = await buscaAnimal();
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
                        nome={nome}
                        setAnimais={setAnimais}
                    />
                </div>
                <div className='card-s'>
                {animais.map(item => {
                        return (
                            <CardFeed
                                id={item.id_animal_adocao}
                                imagem={item.imagem}
                                nome={item.nome}
                                raca={item.raca}
                                porte={item.porte}
                                idade={item.idade}
                                preferencia={item.preferencia}
                                descricao={item.descricao}
                            />
                        );
                    })}
                  
                </div>

            </div>
        </main>
    )
}