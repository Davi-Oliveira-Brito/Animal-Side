import './index.scss'
import { pegarImagem } from '../../api/admin/animalAPI';
import { useNavigate } from 'react-router-dom';
import { deletarAnimalPerdido } from '../../api/usuario/usuarioAPI';
import { toast } from 'react-toastify';

export default function CardPostUser(props) {
    const navigate = useNavigate();
    
    async function deletar() {
        try {
            const r = await deletarAnimalPerdido(props.id);
            console.log(r);
            props.carregarInfo();
            toast.dark('Animal exluido com sucesso!');
        } catch (error) {
            toast.dark(error.message);
        }
    }
    function mostrarImagem() {
        if (typeof (props.imagem) == 'object') {
            //return URL.createObjectURL(props.imagem);
        } else {
            return pegarImagem(props.imagem)
        }
    }
    return (
        <div className='Card-post-user'>
            <div className='lef'><img className='imgdo' src={mostrarImagem()} alt="" /></div>
            <div className='text'>
                <h1>{props.nome}</h1>
                <div className='infododo'>
                    <div>Raça: {props.raca}</div>
                    <div>Porte: {props.porte}</div>
                    <div>Idade: {props.idade}</div>
                    <div>Sexo: {props.sexo}</div>
                    <div>Sumiço: {props.DiaSumico}</div>
                </div>
                <div className='Nmr'> <span className='numero'> Numéro de contato: </span>{props.numero}</div>
                <div className='descricao'>{props.desc}</div>
                <div className='bt-img'>
                    <div> <img onClick={()=>navigate(`/userCadastrarPerdido?id=${props.id}`)} className='imgs' src="/assets/images/Edit.png" alt="" /></div>
                    <div> <img onClick={()=> deletar()} className='imgs' src="/assets/images/Close.png" alt="" /></div>
                    <button className='bt'>Perdido</button>
                </div>
            </div>
        </div>
    );
}