import './index.scss'
import { pegarImagem } from '../../api/admin/animalAPI';

export default function cardPostAdmin(props) {
    function mostrarImagem() {
        if (typeof (props.imagem) == 'object') {
            //return URL.createObjectURL(props.imagem);
        } else {
            return pegarImagem(props.imagem);
        }
    }
    return (
        <div className='Card-post'>
            <div className='left'><img className='imgdog' src={mostrarImagem()} alt="" /></div>
            <div className='texto'>
                <h1>{props.nome}</h1>
                <div className='infododog'>
                    <div>Raça: {props.raca}</div>
                    <div>Porte: {props.porte}</div>
                    <div>Idade: {props.idade}</div>
                    <div>Sexo: {props.sexo}</div>
                    <div>Sumiço: {props.sumico}</div>
                </div>
                <div className='Numero'> <span className='nmr'> Numéro de contato: </span>{props.telefone}</div>
                <div className='desc'>{props.desc}</div>
                <div className='bts'>
                    <button className='botao'>Perdido</button>
                </div>
            </div>
        </div>
    );
}