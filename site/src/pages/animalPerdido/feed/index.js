import './index.scss'

import React, { useState, useEffect } from 'react';

//componentes
import SideBar from '../../../components/sideBar';
import Navbar from '../../../components/navBar';
import CardAnimalPerdido from '../../../components/cardFeedAnimalPerdido';

// API
import { buscarAnimalPerdido } from '../../../api/usuario/usuarioAPI';

// toast
import { toast } from 'react-toastify';
export default function FeedAnimalPerdido() {
    const [animal, setAnimal] = useState([]);

    async function carregarAnimal() {
        try {
            const r = await buscarAnimalPerdido();
            setAnimal(r);
        } catch (error) {
            toast.dark('❗ ' + error.response.data);
        }
    }
    console.log(animal);
    useEffect(()=>{
        carregarAnimal()
    },[]);
    return (
        <main className='feed-animal-perdido'>

            <Navbar />

            <div className='conteudo-feed'>

                <SideBar />

                <div className='right'>

                    <div className='top'>
                        <p className='top-title'>PROCURE SEU ANIMAL E AJUDE OUTRAS PESSOAS A ENCONTRAREM</p>

                        <input className='pesquisa' type="text" placeholder='Procure seu bichinho...' />
                    </div>

                    <div className='bichinhos'>
                        {animal.map((item) => {
                            return(
                                <>
                                    <CardAnimalPerdido
                                        id_animal={item.id_animal}
                                        imagem={item.imagem}
                                        porte={item.porte}
                                        raca={item.raca}
                                        preferencia={item.preferencia}
                                        sexo={item.sexo}
                                        nome={item.nome}
                                        idade={item.idade}
                                        diaSumico={item.diaSumico}
                                        telefone={item.telefone}
                                        descricao={item.descricao}
                                        
                                    />
                                    <CardAnimalPerdido
                                        id_animal={item.id_animal}
                                        imagem={item.imagem}
                                        porte={item.porte}
                                        raca={item.raca}
                                        preferencia={item.preferencia}
                                        sexo={item.sexo}
                                        nome={item.nome}
                                        idade={item.idade}
                                        diaSumico={item.diaSumico}
                                        telefone={item.telefone}
                                        descricao={item.descricao}
                                        
                                    />
                                </>
                            );
                        })}
                    </div>

                </div>

            </div>


        </main>

    );
}