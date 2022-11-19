import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'

import { deletarAnimal } from '../../api/admin/animalAPI'; 
import { pegarImagem } from '../../api/admin/animalAPI';
import { toast } from 'react-toastify';
import SituacaoAnimal from '../SituacaoAnimal/index.js'

export default function CardFeedAdmin(props) {
    const [isOpen, setIsOpen] = useState('nao');
    const navigate = useNavigate();
    async function deletar() {
        try {
            await deletarAnimal(props.id_animal_adocao);
            props.carregarAnimais();
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }
    function mostrarImagem() {
        if (typeof (props.imagem) == 'object') {
            //return URL.createObjectURL(props.imagem)
        } else {
            return pegarImagem(props.imagem)
        }
    }
    return (
        <main className='comp-card-admin'>
            <SituacaoAnimal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className='image'><img src={mostrarImagem()} alt="" /></div>
            <div className='text'>
                <div className='title'>{props.nome}</div>
                <div className='infos'>
                    <div>Raca: {props.raca}</div>
                    <div>Porte: {props.porte}</div>
                    <div>Idade: {props.idade}</div>
                    <div>Preferencia: {props.preferencia}</div>
                </div>
                <div className='desc'>
                    {props.descricao}
                </div>

                <div className='btns'>
                    <div onClick={()=>setIsOpen('sim')}>Situação</div>
                    <div>
                        <div> <img className='img' onClick={() => navigate(`/cadastro?id=${props.id}`)} src="/assets/images/Edit.png" alt="" /></div>
                        <div> <img className='img' onClick={()=> deletar()}src="/assets/images/Close.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </main>
    );
}