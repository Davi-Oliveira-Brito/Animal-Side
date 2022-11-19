import React, { useState } from 'react'
import './index.scss';

export default function CardUserInteressado(props) {
    const [feedback, setFeedback] = useState(props.ds_feedback); 

    return (
        <div className='info-user'>
            <div className='first-row'>
                <div className='letra'><span>{props.nm_usuario[0]}</span></div>
                <div className='names'>
                    <div className='column'>
                        <div>
                            <span>Nome</span><span>{props.nm_usuario}</span>
                        </div>
                        <div>
                            <span>Fone</span><span>{props.ds_telefone}</span>
                        </div>
                        <div>
                            <span>Email</span><span>{props.ds_email}</span>
                        </div>

                    </div>

                    <div className='column'>
                        <div>
                            <span>Renda</span><span>{props.vl_renda}</span>
                        </div>
                        <div>
                            <span>Tem Animal:</span><span>{props.bt_animais_casa}</span>
                        </div>
                        <div>
                            <span>Tipo de casa</span><span>{props.tp_residencia}</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='descricao'>{props.ds_comentario}</div>

            <textarea onChange={(e)=> setFeedback(e.target.value)}>{feedback}</textarea>

            <div onClick={() => props.enviar({
                comentario: feedback,
                usuario: props.id_usuario,
                animal_adocao: props.id_animal_adocao
            })} className='btn'>
                <span>Enviar</span>
            </div>
        </div>
    )
}
