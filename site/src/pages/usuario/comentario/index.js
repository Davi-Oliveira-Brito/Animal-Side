import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';
import DadoUser from '../../../components/dados/index.js';
import ComentarioComp from '../../../components/comentariosComp/index.js';

// api

import { mostrarComentariosFront } from '../../../api/usuario/usuarioAPI';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function UserComent() {

    const [comentarios, setComentarios] = useState([]);

    async function carregarComents() {
        try {
            const r = await mostrarComentariosFront();
            setComentarios(r.result);
            console.log(r)
        } catch (error) {
            toast.dark(error.response.data.error)
        }
    }

    useEffect(() => {
        carregarComents();
    }, []);


    return (
        <main className="coment-page">
            <NavBarAdmin />
            <SidebarUser />
            <div className="coment-right">
                <div className='dado'>
                    <DadoUser
                        nome="Davi Oliveira Brito"
                        regiao="São Paulo, SP" />
                </div>

                <div className='comp'>
                    {comentarios.map(item => {
                        return (
                            <ComentarioComp
                                id={item.id_comentario}
                                primeiraLetra={item.nm_usuario[0]}
                                nome={item.nm_usuario}
                                coment={item.ds_comentario}
                            />
                        )
                    })}
                </div>

            </div>
        </main>
    );

}