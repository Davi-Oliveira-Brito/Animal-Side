import React, { useEffect, useState } from 'react'
import './index.scss';

import storage from 'local-storage'
import { pegarImagem } from '../../api/admin/animalAPI';
import { enviarAdocaoAnimal } from '../../api/usuario/usuarioAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
export default function AnimalPopUp(props) {
  const [canAdopt, setCanAdopt] = useState(true);
  const navigate = useNavigate();

  function goNext() {
    let canGo = true;
    let obj = storage('usuario-logado');
    for (const item in obj) {
      if (obj[item] === undefined || obj[item] === null) canGo = false;
    }
    if (canGo === true) {
      navigate(`/motivo/adocao?animalId=${props.id}`)
    }
    else {
      navigate(`/userPerfil`)
      toast.dark('❗ Por favor termine seu cadastro antes de adotar!')
    }
  }

  function mostrarImagem() {
    if (typeof (props.imagem) == 'object') {
      //return URL.createObjectURL(props.imagem);
    } else {
      return pegarImagem(props.imagem)
    }
  }
  useEffect(() => {
  }, []);
  return (
    <div className={`animal-info-popup ${props.isOpen}`}>
      <div className='container'>
        <div className='image'><img src={mostrarImagem()} alt="" /></div>
        <div className='text'>
          <div className='name'>{props.nome}</div>
          <div className='info'><span>Raça: {props.raca}</span>  <span>Porte: {props.porte}</span>   <span>Idade: {props.idade}</span>   <span>Preferencia: {props.preferencia}</span></div>
          <div className='desc'>{props.descricao}</div>

          <div className="buttons">
            <button onClick={() => props.setIsOpen('nao')} className="botao">Fechar</button>
            <button onClick={() => goNext()} className="botao">Adotar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
