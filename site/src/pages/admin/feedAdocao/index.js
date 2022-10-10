import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.scss'

// Components
import NavBarAdmin from '../../../components/navBarAdmin/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import CardFeedAdmin from '../../../components/cardFeedAdmin/index.js'

// Api
import { buscaAnimal } from '../../../api/animalAPI.js';

import { toast } from 'react-toastify'


export default function FeddAdocao() {
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