import './index.scss'

export default function CardBicho(props) {
    return (
        <main className="cardBicho">
            <div className="img-area">
                <img src={props.image} alt="" />
            </div>
            <div className={props.cor}>
                <p className="nome">{props.nome}</p>
                
                <p className="desc">{props.desc}</p>

                <button className="botao">Conhecer</button>
            </div>
        </main>
    );
}