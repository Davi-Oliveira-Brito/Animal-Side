import { useState } from 'react';
import { pegarImagem } from '../../api/admin/animalAPI';
import './index.scss';

export default function CardAnimalPerdido(props){
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }
    return(
        <main className="animal-perdido">
            <div className='image-area'>        
                <img src={mostrarImagem()} alt="" />
            </div>

            <div className="text-area">
                <p className='nome'>{ props.nome }</p>
                <div className='dados-animal'>
                    <div className='text-left'>
                        <p><span>Raça: </span>{ props.nome }</p>
                        <p><span>Idade: </span>{ props.idade }</p>
                        <p><span>Sexo: </span>{props.sexo}</p>
                    </div>

                    <div className='text-right'>
                        <p><span>Porte: </span>{props.porte}</p>
                    </div>
                </div>

                <p className='ver-mais'>Ver mais</p>

                <div className='interacoes'>
                    <img className='denuncia' src="/assets/images/coment.png" alt="" />
                    <img className='coment' src="/assets/images/denuncia.png" alt="" />
                </div>
            </div>
        </main>
    );

}