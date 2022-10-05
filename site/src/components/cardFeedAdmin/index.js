import './index.scss'

export default function CardFeedAdmin(props) {
    return (
        <main className='Card'>
            <div className='image-left'>
                <img src="/assets/images/dogBranco.png" alt="" />
            </div>
            <div className='Card-right'>
                <div className='text'>
                    <h1>{props.nome}</h1>
                    <p>Raça: {props.raca}</p>
                    <p>Porte: {props.porte}</p>
                    <p>Idade: {props.idade}</p>
                    <p>Pref: {props.pref}</p>
                </div>
                <div className='botao-img'>
                    <div className='botao'>Situação</div>
                    <div className='img-interative'>
                        <img className='img' src="/assets/images/Edit.png" alt="" />
                        <img className='img' src="/assets/images/Close.png" alt="" />
                    </div>
                </div>
            </div>

        </main>
    );
}