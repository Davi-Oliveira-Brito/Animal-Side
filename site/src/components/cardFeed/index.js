import './index.scss'

export default function CardFeed(props) {
    return (
        <main className="card">
            <div className="left-area">
                <img src="/assets/images/dogBranco.png" alt="" />
            </div>

            <div className="right-area">
                
                <div className="text-area">
                    <h1 className="card-title">Doguinho Daora</h1>
                    <b className="card-raca">Raça</b>
                    <p className="card-desc">
                    Isso é uma texto ilustrativo para 
                    a descrição de uma suposto animal
                    </p>
                    <p className="card-idade">10 Anos</p>
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