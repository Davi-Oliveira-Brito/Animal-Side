import React, { useEffect, useState } from 'react'
import './index.scss';

import { pegarImagem } from '../../api/admin/animalAPI';
import { buscarComentariosPerdidos, enviarComentarioPerdido,  } from '../../api/usuario/usuarioAPI';
import { toast } from 'react-toastify'
import storage from 'local-storage'
export default function AnimalPerdidoPopUp(props) {
    const [comentarios, setComentarios] = useState([]);
    const [comentario, setComentario] = useState('');
    
    async function carregarComentario() {
        try {
            if(storage('usuario-logado')){
                const r = await buscarComentariosPerdidos(props.id_animal);
                setComentarios(r);
            }
        } catch (error) {
            toast.dark(error.response.data);
        }
    }

    async function enviar() {
        try {
            const r = await enviarComentarioPerdido(comentario, storage('usuario-logado').id, props.id_animal);
            carregarComentario();
        } catch (error) {
            toast.dark(error.response.data);
        }
    }

    function mostrarImagem() {
        if (typeof (props.imagem) == 'object') {
            //return URL.createObjectURL(props.imagem);
        } else {
            return pegarImagem(props.imagem)
        }
    }
    useEffect(()=>{
        if(!storage('usuario-logado')){
            props.setIsOpen('nao');
            toast.dark('❗ Faça login pra ajudar outras pessoas!');
        }
        carregarComentario()
    },[]);
    return (
        <div className={`animal-perdido-comp ${props.isOpen}`}>
            <div className='container'>
                <div className='first-row'>
                    <div className='image'> <img src={mostrarImagem()} alt="" /> </div>
                    <div className='comment-container'>
                        {comentarios.map((item) => {
                            return(
                                <div className='comment-box'>
                                    <div className='letra'>{item.nm_usuario[0]}</div>
                                    <div className='info'>
                                        <span>{ item.nm_usuario }</span>
                                        <span>{ item.ds_comentario }</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='second-row'>
                    <div className='info'>
                        <div className='name'>{props.nome}</div>
                        <div className='columns'>
                            <div className='first-column'>
                                <div>
                                    <span>Raça</span><span>{props.raca}</span>
                                </div>
                                <div>
                                    <span>Idade</span><span>{props.idade}</span>
                                </div>
                                <div>
                                    <span>Sexo</span><span>{props.sexo}</span>
                                </div>

                            </div>
                            <div className='second-column'>
                                <div>
                                    <span>Porte</span><span>{props.porte}</span>
                                </div>

                                <div>
                                    <span>Dia</span><span>{props.diaSumico.substring(0,10)}</span>
                                </div>

                                <div>
                                    <span>Fone</span><span>{props.telefone}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-container'>
                        <textarea onChange={(e)=>setComentario(e.target.value)} placeholder='Deixa seu comentario:'>{comentario}</textarea>
                        <span onClick={()=>enviar()}>Enviar</span>
                    </div>
                </div>
                <div className='third-row'>
                    <div className='descricao'><p>{props.descricao}</p></div>
                    <div className='botao-container'>
                        <div onClick={() => props.setIsOpen('nao')} className='btn'>Fechar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
