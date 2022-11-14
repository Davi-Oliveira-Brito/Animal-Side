import { useState } from 'react';
import { pegarImagem } from '../../api/admin/animalAPI';
import './index.scss';

import AnimalPerdidoPopUp from '../animalPerdidoPopUp';

export default function CardAnimalPerdido(props){   
    const [isOpen, setIsOpen] = useState('nao');
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            //return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }
    return(
        <main className="animal-perdido">
            <AnimalPerdidoPopUp
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                id_animal={props.id_animal}
                imagem={props.imagem}
                porte={props.porte}
                raca={props.raca}
                preferencia={props.preferencia}
                sexo={props.sexo}
                nome={props.nome}
                idade={props.idade}
                diaSumico={props.diaSumico}
                telefone={props.telefone}
                descricao={props.descricao}
            />
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

                <p onClick={()=>setIsOpen('sim')} className='ver-mais'>Ver mais</p>

                <div className='interacoes'>
                    <img onClick={()=>setIsOpen('sim')} className='denuncia' src="/assets/images/coment.png" alt="" />
                    <img className='coment' src="/assets/images/denuncia.png" alt="" />
                </div>
            </div>
        </main>
    );

}