import React, { useEffect, useState } from 'react';
import './index.scss'
import Navbar from '../../../components/navBar';
import { useNavigate, useSearchParams } from 'react-router-dom';

// API
import { enviarAdocaoAnimal } from '../../../api/usuario/usuarioAPI';

import storage from 'local-storage';
import { toast } from 'react-toastify';

export default function PageComentario(){
    const [idAnimal, setIdAnimal] = useSearchParams('animalId');  
    const [comentario, setComentario] = useState('');
    const navigate = useNavigate();
    
    async function enviar() {
        try {
            let inserteId = await enviarAdocaoAnimal(idAnimal.get('animalId'), storage('usuario-logado').id, comentario)
            console.log(inserteId);
            toast.dark('😃 Estamos ansiosos pra te conhecer ');
            navigate('/feedAdocao');
        } catch (error) {
            toast.dark('❗ ' + error.responde.data);
        }
    }
    return(
        <main className='page-comentario'>
            <Navbar/>
            <div className='page'>
               <div className='left'> <img className='image' src="/assets/images/Playing with dog.png" alt=""/> </div>
                <div className='right'>
                <h1 className='text'> CONTE POR QUE VOCÊ 
                VAI QUERER ADOTAR  
                NOSSO BICHINHO? </h1>
                <textarea onChange={(e)=> setComentario(e.target.value)} placeholder='Conte aqui'>{comentario}</textarea>
                    <div className='direcao'>
                    <button onClick={() => enviar()} className='botao'>Enviar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}