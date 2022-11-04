import './index.scss'

export default function ComentarioComp(props) {
    return (
        <main className='comentario'>
            <div className='bola'>
                <p>L</p>
            </div>

            <div className='text-comentario'>
                <p className='coment-name'>Nome: {props.nome}</p>
                <p className='coment-desc'>{props.coment}</p>
            </div>
        </main>
    );

}