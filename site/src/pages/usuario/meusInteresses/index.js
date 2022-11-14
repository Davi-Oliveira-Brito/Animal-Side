import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import NavBarAdmin from '../../../components/navBarAdmin';
import DadoUser from '../../../components/dados';


import { buscaAnimal } from '../../../api/animalAPI';
import { pegarImagem } from '../../../api/admin/animalAPI';

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

    function mostrarImagem() {
        if(typeof(animais.imagem) == 'object'){
            return URL.createObjectURL(animais.imagem);
        }else{
            return pegarImagem(animais.imagem);
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
                <div className='comp'>
                    <DadoUser />
                </div>
                <div className='card-meus-interesses'>
                    <div className='left-card'>
                        <img src="assets/images/DogBranco.png" alt="" />
                    </div>
                    <div className='card-right'>
                        <h1 className='title'>Spike</h1>
                        <div className='infodog'>
                        <div>Raça: Husky </div>
                        <div> Porte: G </div>
                        <div> Idade: 2 anos </div> 
                        <div>  Pref: Casa</div>
                        </div>
                        <p className='desc'>Quero adotar o Spike, pois estou a procura de um companheiro dócil e que queira brincar no espaço grande que temos em nosso quintal.</p>
                    </div>
                </div>
            </div>
        </main>
    );

}