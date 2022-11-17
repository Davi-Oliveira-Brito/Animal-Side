import './index.scss'
import SituacaoAnimal from '../situacaoAnimal';
export default function ComentarioComp(props) {

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