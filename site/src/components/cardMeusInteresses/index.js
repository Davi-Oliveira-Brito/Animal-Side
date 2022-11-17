import './index.scss'
import { pegarImagem } from '../../api/admin/animalAPI';

export default function CardMeusInteresses(props){

    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            //return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem);
        }
    }
    return(
        <div className='card-meus-interesses'>
        <div className='left-card'>
            <img src={mostrarImagem()} alt="" />
        </div>
        <div className='card-right'>
            <h1 className='title'>{props.nome}</h1>
            <div className='infodog'>
            <div>Raça: {props.raca} </div>
            <div> Porte: {props.porte}</div>
            <div> Idade: {props.idade}</div> 
            <div>  Pref: {props.preferencia}</div>
            </div>
            <p className='desc'>{props.descricao}</p>
        </div>
    </div>
    );
    
}