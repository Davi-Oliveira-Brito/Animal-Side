import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.scss'
import NavBarAdmin from  '../../../components/navBarAdmin/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import CardFeedAdmin from '../../../components/cardFeedAdmin/index.js'
import { listarAnimal } from '../../../api/feedAdmin';



export default function FeddAdocao(){  
    const [animais, setAnimais] = useState([]);
    const navigate = useNavigate('');
    async function carregarAnimais() {
        try{
            const r = await listarAnimal();
            setAnimais(r);
        }catch(error) {

        }
    }
    console.log(animais);
    useEffect(()=>{
        carregarAnimais();
    },[]);
    return(
        <main className="feed-main">
            <NavBarAdmin/>
            <div>
                <SideBarAdmin/>
            </div>

            <div className='card-input'>
                <input className='input' type='text' placeholder='Busca por nome'/>
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
        </main>
    )
}