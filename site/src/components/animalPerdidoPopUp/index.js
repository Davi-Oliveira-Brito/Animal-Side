import React from 'react'
import './index.scss';

import { pegarImagem } from '../../api/admin/animalAPI';


export default function AnimalPerdidoPopUp(props) {
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }
    return (
    <div className='animal-perdido-comp'>
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
                    <div className='first-column'>
                        <span>Raça<span></span>{props.raca}</span>
                        <span>Idade<span></span>{props.idade}</span>
                        <span>Sexo<span></span>{props.sexo}</span>
                    </div>
                    <div className='second-column'>
                        <span>Porte<span></span>{props.porte}</span>
                        <span>Sumico<span></span>{props.sumico}</span>
                        <span>Sexo<span></span>{props.sexo}</span>
                    </div>
                </div>

                <div className='text-container'>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    </div>
  )
}
