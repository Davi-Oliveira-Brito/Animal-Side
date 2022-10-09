import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.scss'
import NavBarAdmin from '../../../components/navBarAdmin/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import CardFeedAdmin from '../../../components/cardFeedAdmin/index.js'

import { buscaAnimal } from '../../../api/animalAPI.js';



export default function FeddAdocao() {
    const [animais, setAnimais] = useState([]);
    const navigate = useNavigate(``);
    async function carregarAnimais() {
        try {
            const r = await buscaAnimal();
            setAnimais(r);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(animais);
    useEffect(() => {
        carregarAnimais();
    }, []);
    return (
        <main className="feed-main">
                <NavBarAdmin />
            <div className='componente'>
                <SideBarAdmin />
            </div>
            <div className='top'>
                <input className='Barra-de-busca' type="text" placeholder='Buscar por nome' />
                <div className='comp'>
                {animais.map(item => {
                return(
                    <CardFeedAdmin
                    nome={item.nm_animal} 
                    raca={item.ds_raca} 
                    porte={item.ds_porte} 
                    idade={item.nr_idade} 
                    pref={item.ds_preferencia} />
                )
            })}
                </div>
            </div>
        </main>
    )
}