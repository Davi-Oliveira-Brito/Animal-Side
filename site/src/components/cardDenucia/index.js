import './index.scss'

export default function CardDenuncia() {
    return (
        <main className='card-denuncia'>
            <div className='left'><img src="assets/images/dogBranco.png" alt="" /></div>
            <div className='text'>
                <h1>Spike</h1>
                <div className='infododo'>
                    <div>Raça: Husky</div>
                    <div>Porte: G</div>
                    <div>Idade: 2 anos</div>
                </div>
                    <div className='info'>
                        <div>Sexo: Maculino</div>
                        <div>Sumiço: 28/08/2022</div>
                    </div>
                <div className='Nmr'> <span className='numero'> Numéro de contato: </span>(11) 93566 - 0437</div>
                <div>Ver mais</div>
                <div className='bt-img'>
                    <button className='bt'>Perdido</button>
                    <div> <img className='imgs' src="/assets/images/Close.png" alt="" /></div>
                </div>
            </div>
        </main>
    );
}