import React, { useEffect, useState,useSearchParams } from 'react';
import './index.scss'
import { toast } from 'react-toastify';
import storage from 'local-storage';

import { UsuarioPost } from '../../../api/usuario/usuarioAPI';
import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import DadoUser from '../../../components/dados';
import CardPostUser from '../../../components/cardPostUser';
import SideBarUsuario from '../../../components/sidebarUsuario'

export default function UserPost(){
    const [perdido, setPerdido] = useState([]);

    async function carregarInfo(){
        try {
            const r = await UsuarioPost(storage('local-usuario').id);
            console.log(r);
            setPerdido(r);
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }

    useEffect(() => {
        carregarInfo();
    },[])
    return (
        <main className="userPost-Main">
            <SideBarUsuario/>
            <NavBarAdmin />
            <div className='top-post'>
                <DadoUser/>
               {perdido.map( item =>{
                return(
                    <CardPostUser
                    id={item.id_animal}
                    imagem={item.imagem}
                    nome={item.nome}
                    raca={item.raca}
                    porte={item.porte}
                    idade={item.idade}
                    sexo={item.sexo}
                    sumico={item.diaSumico}
                    numero={item.telefone}
                    desc={item.descricao} />
                )
               })}
            </div>
        </main>
    )
}