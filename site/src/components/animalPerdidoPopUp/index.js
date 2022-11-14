import React from 'react'
import './index.scss';

import { pegarImagem } from '../../api/admin/animalAPI';


export default function AnimalPerdidoPopUp(props) {
    function mostrarImagem() {
        if (typeof (props.imagem) == 'object') {
            return URL.createObjectURL(props.imagem);
        } else {
            return pegarImagem(props.imagem)
        }
    }
    return (
        <div className={`animal-perdido-comp ${props.isOpen}`}>
            <div className='container'>
                <div className='first-row'>
                    <div className='image'> <img src={mostrarImagem()} alt="" /> </div>
                    <div className='comment-container'>
                        <div className='comment-box'>
                            <div className='letra'>L</div>
                            <div className='info'>
                                <span>Texto dahora</span>
                                <span>Descricao dahora</span>
                            </div>
                        </div>
                        <div className='comment-box'>
                            <div className='letra'>L</div>
                            <div className='info'>
                                <span>Texto dahora</span>
                                <span>Descricao dahora</span>
                            </div>
                        </div>
                        <div className='comment-box'>
                            <div className='letra'>L</div>
                            <div className='info'>
                                <span>Texto dahora</span>
                                <span>Descricao dahora</span>
                            </div>
                        </div>
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
                        <textarea placeholder='Deixa seu comentario:'></textarea>
                        <span>Enviar</span>
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
