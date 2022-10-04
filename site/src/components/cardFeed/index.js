import './index.scss'

export default function CardFeed(props) {
    return (
        <div className="cards-mom">

            <div className="carde">

                <img className="card-image" src="/assets/images/dogBranco.png" alt="" />

                <div className="left-card">
                    <div className="text-card">
                        <p className="titleCard">{props.nome}</p>
                        <p className="little-letters">{props.idade}</p>
                        <p className="little-desc">{props.descricao} </p>
                        <p className="little-letters">{props.porte}</p>
                    </div>

                    <div className="buttons-div">
                        <div className="butoes">
                            <button className="butao">Conhecer</button>
                            <button className="butao">Adotar</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}