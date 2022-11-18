import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { buscarComentarios, enviarFeedBack } from '../../api/admin/adminAPI';
import './index.scss';

export default function SituacaoAnimal(props) {
    const [feedback, setFeeback]  = useState('');
    const [comentarios, setComentarios] =  useState([]);

    console.log(props);
    async function buscarComment() {
        try {
            const r = await buscarComentarios();
            setComentarios(r);
        } catch (error) {
            toast.dark(error.response.data);
        }
    }

    async function enviar(info) {
        try {
            const r = await enviarFeedBack(info);
            console.log(r);
            toast.dark('Feedback enviado com sucesso');    
        } catch (error) {
            console.log(error.response);
            toast.dark(error.response.data);
        }
    }

    useEffect(()=>{
        buscarComment();
    },[]);
    return (
        <div className={`situacao-animal ${props.isOpen}`}>
            <div className='container'>
                <div className='titulo'>Pessoas querendo adotar esse bichinho <div onClick={()=>props.setIsOpen('nao')} className='btn'>Fechar</div></div>
                <div className='status-container'>
                    {comentarios.map((item) => {
                        return(


                        <div className='info-user'>
                            <div className='first-row'>
                                <div className='letra'><span>{item.nm_usuario[0]}</span></div>
                                <div className='names'>
                                    <div className='column'>
                                        <div>
                                            <span>Nome</span><span>{item.nm_usuario}</span>
                                        </div>
                                        <div>
                                            <span>Fone</span><span>{item.ds_telefone}</span>
                                        </div>
                                        <div>
                                            <span>Email</span><span>{item.ds_email}</span>
                                        </div>

                                    </div>
                                    
                                    <div className='column'>
                                        <div>
                                            <span>Renda</span><span>{item.vl_renda}</span>
                                        </div>
                                        <div> 
                                            <span>Tem Animal:</span><span>{item.bt_animais_casa}</span>
                                        </div>
                                        <div>
                                            <span>Tipo de casa</span><span>{item.tp_residencia}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='descricao'>{ item.ds_comentario }</div>

                            <textarea id={item.nm_usuario}></textarea>

                            <div onClick={()=>enviar({
                                comentario: feedback,
                                usuario: item.id_usuario,
                                animal_adocao: item.id_animal_adocao 
                            })} className='btn'>
                                <span>Enviar</span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
