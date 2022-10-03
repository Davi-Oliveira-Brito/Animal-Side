import './index.scss'

export default function CardFeedAdmin(props) {
    return (
        <div className="cards-mom">

            <div className="carde">

                <img className="card-image" src="/assets/images/dogBranco.png" alt="" />

                <div className="left-card">
                        <h1 className="titleCard">{props.nome}</h1>
                    <div className="text-card">
                        <p className="little-letters">Raça: {props.raca}</p>
                        <p className="little-letters">Porte: {props.porte} </p>
                        <p className="little-letters">Idade: {props.idade}</p>
                        <p className="little-letters">Pref: {props.pref}</p>
                    </div>

                    <div className="buttons-div">
                        <button className="butao">Situação</button>
                    </div>

                    <div className='imageInterativa'>
                        <img className='image-interative' src='/assets/images/Edit.png' alt='' />
                        <img className='image-interative' src='/assets/images/Close.png' alt=''/>
                    </div>
                </div>


            </div>

        </div>
    );
}