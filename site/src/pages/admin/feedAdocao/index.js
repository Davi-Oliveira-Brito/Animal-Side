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
                    id={item.id_animal_adocao}
                    imagem={item.imagem}
                    nome={item.nome} 
                    raca={item.raca} 
                    porte={item.porte} 
                    idade={item.idade} 
                    preferencia={item.preferencia}
                    carregarAnimais={carregarAnimais} />
                )
            })}
                </div>
            </div>
        </main>
    )
}