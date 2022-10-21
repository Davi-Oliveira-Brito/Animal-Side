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
        <main className='comp-card-admin'>
            <div className='image' style={{backgroundImage: mostrarImagem()}}><img src={mostrarImagem()} alt="" /></div>
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
                    <div>Situação</div>
                    <div>
                        <div>editar</div>
                        <div>editar</div>
                    </div>
                </div>
            </div>
        </main>
    );
}