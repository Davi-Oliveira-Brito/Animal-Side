import { useNavigate } from 'react-router-dom';
import './index.scss'

import { deletarAnimal } from '../../api/admin/animalAPI'; 
import { pegarImagem } from '../../api/admin/animalAPI';
import { toast } from 'react-toastify';

export default function CardFeedAdmin(props) {
    const navigate = useNavigate();
    async function deletar() {
        try {
            await deletarAnimal(props.id);
            props.carregarAnimais();
        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }
    
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }

    return (
        <main className='Card'>
            <div className='image-left'>
                <img className='imgdog' src="/assets/images/dogBranco.png" alt="" />
            </div>
            <div className='Card-right'>
                <div className='text'>
                    <h1 className='title'>{props.nome}</h1>
                    <div>Raça: {props.raca}</div>
                    <div>Porte: {props.porte}</div>
                    <div>Idade: {props.idade}</div>
                    <div>Pref: {props.preferencia}</div>
                </div>
                <div className='botao-img'>
                    <button className='botao'>Situação</button>
                    <div className='img-interative'>
                        <img className='img' onClick={() => navigate(`/cadastro?id=${props.id}`)} src="/assets/images/Edit.png" alt="" />
                        <img className='img' onClick={()=> deletar()}src="/assets/images/Close.png" alt="" />
                    </div>
                </div>
            </div>

        </main>
    );
}