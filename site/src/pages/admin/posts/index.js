import React, { useEffect, useState } from 'react';
import './index.scss'
import { toast } from 'react-toastify';

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SideBarAdmin from '../../../components/sideBarAdmin/index.js';
import CardPostAdmin from '../../../components/cardPostAdmin';
import { buscarAnimalPerdido } from '../../../api/usuario/usuarioAPI';







export default function Post() {
    const[animalPerdido, setAnimalPerdido] = useState([]);

    async function carregarAnimal() {
        try {
            const r = await buscarAnimalPerdido()
            setAnimalPerdido(r);
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }
    useEffect(() => {
        carregarAnimal();
    }, []);

    return (
        <main className="feed-main">
            <NavBarAdmin />
            <div className='componente'>
                <SideBarAdmin />
            </div>
            <div className='top'>
                <input className='Barra-de-busca' type="text" placeholder='Buscar por nome' />
                {animalPerdido.map(item => {
                        return (
                            <CardPostAdmin
                                imagem={item.imagem}
                                nome={item.nome}
                                raca={item.raca}
                                porte={item.porte}
                                idade={item.idade}
                                sexo={item.sexo}
                                sumico={item.diaSumico}
                                telefone={item.telefone}
                                desc={item.descricao} />
                        )
                    })}
            </div>
        </main>
    )
}