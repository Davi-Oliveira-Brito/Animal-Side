import'./index.scss'
import { pegarImagem } from '../../api/admin/animalAPI';

export default function cardPostUser(props){
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            //return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }
    return(
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
            <div> <img className='imgs' src="/assets/images/Edit.png" alt="" /></div>
                        <div> <img className='imgs' src="/assets/images/Close.png" alt="" /></div>
                <button className='bt'>Perdido</button>
            </div>
        </div>
    </div>
    );
}