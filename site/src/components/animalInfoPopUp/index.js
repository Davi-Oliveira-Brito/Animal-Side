import React from 'react'
import './index.scss';

import { pegarImagem } from '../../api/admin/animalAPI';

export default function AnimalPopUp(props) {
  
  function mostrarImagem() {
    if(typeof(props.imagem) == 'object'){
        return URL.createObjectURL(props.imagem);
    }else{
        return pegarImagem(props.imagem)
    }
  }
  console.log(props.isOpen);
  return (
    <div className={`animal-info-popup ${props.isOpen}`}>
        <div className='container'>
          <div className='image'><img src={mostrarImagem()} alt="" /></div>
          <div className='text'>
            <div className='name'>{props.nome}</div>
            <div className='info'><span>{props.raca}</span>  <span>{props.porte}</span>   <span>{props.idade}</span>   <span>{props.preferencia}</span></div>
            <div className='desc'>{props.descricao}</div>
          </div>
        </div>
    </div>
  )
}
