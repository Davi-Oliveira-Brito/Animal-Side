import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { buscarComentarios, enviarFeedBack } from '../../api/admin/adminAPI';
import CardUserInteressado from '../CardUserInterresado';
import './index.scss';

export default function SituacaoAnimal(props) {
    const [feedback, setFeeback]  = useState('');
    const [comentarios, setComentarios] =  useState([]);


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
                        return (
                            <CardUserInteressado
                            ds_feedback={item.ds_feedback}
                            nm_usuario={item.nm_usuario}
                            ds_telefone={item.ds_telefone}
                            ds_email={item.ds_email}
                            vl_renda={item.vl_renda}
                            bt_animais_casa={item.bt_animais_casa}
                            tp_residencia={item.tp_residencia}
                            ds_comentario={item.ds_comentario}
                            id_usuario={item.id_usuario}
                            id_animal_adocao={item.id_animal_adocao}
                            enviar={enviar}
                            />
                        );    
                    })}
                </div>
            </div>
        </div>
    )
}
