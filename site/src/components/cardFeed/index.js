import './index.scss'

export default function CardFeed(props) {
    return (
        <main className="card">
            <div className="left-area">
                <img src="/assets/images/dogBranco.png" alt="" />
            </div>

            <div className="right-area">
                
                <div className="text-area">
                    <h1 className="card-title">{props.nome}</h1>
                    <b className="card-raca">{props.raca}</b>
                    <p className="card-desc">{props.descricao}</p>
                    <p className="card-idade">{props.idade}</p>
                </div>

                <div className="buttons-area">

                    <div className="buttons">
                        <button className="botao">Conhecer</button>
                        <button className="botao">Adotar</button>
                    </div>

                </div>
            </div>

        </main>
    );
}