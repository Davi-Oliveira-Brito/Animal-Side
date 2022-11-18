import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';
import DadoUser from '../../../components/dados/index.js';
import ComentarioComp from '../../../components/comentariosComp/index.js';

// api
import { mostrarComentariosFront } from '../../../api/usuario/usuarioAPI';

import storage from 'local-storage'

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
                        nome={storage('usuario-logado').nome}
                        regiao={storage('usuario-logado').endereco} />
                </div>

                <div className='comp'>
                    {comentarios.map(item => {
                        return (
                            <ComentarioComp
                                id={item.id_comentario}
                                nm_animal={item.nm_animal}
                                primeiraLetra={item.nm_animal[0]}
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