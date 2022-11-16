import './index.scss'

import SituacaoAnimal from '../SituacaoAnimal';
import { useState } from 'react';

export default function ComentarioComp(props) {
    const [isOpen, setIsOpen] = useState('nao');

    return (
        <main className='comentario'>

            <div className='bola'>
                <p>{props.primeiraLetra}</p>
            </div>

            <div className='text-comentario'>
                <span className='coment-name'><label>Nome:</label> {props.nome}</span>
                <span className='coment-name'><label>Animal:</label> {props.nm_animal}</span>
                <span className='coment-desc'>{props.coment}</span>
            </div>
        </main>
    );

}