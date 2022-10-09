import './index.scss'

export default function CardFeedAdmin(props) {
    return (
        <main className='Card'>
            <div className='image-left'>
                <img className='imgdog' src="/assets/images/dogBranco.png" alt="" />
            </div>
            <div className='Card-right'>
                <div className='text'>
                    <h1>{props.nome}</h1>
                    <div>Raça: {props.raca}</div>
                    <div>Porte: {props.porte}</div>
                    <div>Idade: {props.idade}</div>
                    <div>Pref: {props.pref}</div>
                </div>
                <div className='botao-img'>
                    <button className='botao'>Situação</button>
                    <div className='img-interative'>
                        <img className='img' src="/assets/images/Edit.png" alt="" />
                        <img className='img' src="/assets/images/Close.png" alt="" />
                    </div>
                </div>
            </div>

        </main>
    );
}