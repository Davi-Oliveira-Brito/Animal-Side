import'./index.scss'

export default function cardPostUser(props){
    return(
        <div className='Card-post-user'>
        <div className='lef'><img className='imgdo' src="assets/images/dogBranco.png" alt="" /></div>
        <div className='text'>
            <h1>Spike</h1>
            <div className='infododo'>
                <div>Raça: Husky</div>
                <div>Porte: G</div>
                <div>Idade: 2 anos</div>
                <div>Sexo: Maculino</div>
                <div>Sumiço: 28/08/2022</div>
            </div>
            <div className='Nmr'> <span className='numero'> Numéro de contato: </span>(11) 93566 - 0437</div>
            <div className='descricao'>Spike se soltou da coleira no estacionamento do Parque Ibirapuera, por volta das 15hrs, provavelmente saiu de dentro e deve estar pelas redondezas.
                O mesmo é muito carinhoso, educado e responde muito bem pelo nome.</div>
            <div className='bt-img'>
            <div> <img className='imgs' src="/assets/images/Edit.png" alt="" /></div>
                        <div> <img className='imgs' src="/assets/images/Close.png" alt="" /></div>
                <button className='bt'>Perdido</button>
            </div>
        </div>
    </div>
    );
}