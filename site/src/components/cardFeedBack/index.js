import './index.scss'

export default function FeedbackComp(props) {

    return (
        <main className='comentario'>

            <div className='imagem-adm'>
                <img src="/assets/images/admin.png" alt="" />
            </div>

            <div className='text-comentario'>
                <span className='coment-name'><label>Nome:</label> {props.nome}</span>
                <span className='coment-name'><label>Animal:</label> {props.nm_animal}</span>
                <span className='coment-desc'>{props.coment}</span>
            </div>
        </main>
    );

}