import React, { useEffect, useState } from 'react';
import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SideBarAdmin from '../../../components/sideBarAdmin/index.js';




export default function Post() {
    
    return (
        <main className="feed-main">
            <NavBarAdmin />
            <div className='componente'>
                <SideBarAdmin />
            </div>
            <div className='top'>
                <input className='Barra-de-busca' type="text" placeholder='Buscar por nome' />
            <div className='Card'>
                <div className='left'><img className='imgdog' src="assets/images/dogBranco.png" alt="" /></div>
                <div className='texto'>
                    <h1>Spike</h1>
                    <div className='infododog'>
                        <div>Raça: Husky</div>
                        <div>Porte: G</div>
                        <div>Idade: 2 anos</div>
                        <div>Sexo: Maculino</div>
                        <div>Sumiço: 28/08/2022</div>
                    </div>
                    <div className='Numero'> <span className='nmr'> Numéro de contato: </span>(11) 93566 - 0437</div>
                    <div className='desc'>Spike se soltou da coleira no estacionamento do Parque Ibirapuera, por volta das 15hrs, provavelmente saiu de dentro e deve estar pelas redondezas.
                        O mesmo é muito carinhoso, educado e responde muito bem pelo nome.</div>
                    <div className='bts'>    
                    <button className='botao'>Perdido</button>
                    </div>
            </div>
                </div>

                <div className='Card'>
                <div className='left'><img className='imgdog' src="assets/images/dogBranco.png" alt="" /></div>
                <div className='texto'>
                    <h1>Spike</h1>
                    <div className='infododog'>
                        <div>Raça: Husky</div>
                        <div>Porte: G</div>
                        <div>Idade: 2 anos</div>
                        <div>Sexo: Maculino</div>
                        <div>Sumiço: 28/08/2022</div>
                    </div>
                    <div className='Numero'> <span className='nmr'> Numéro de contato: </span>(11) 93566 - 0437</div>
                    <div className='desc'>Spike se soltou da coleira no estacionamento do Parque Ibirapuera, por volta das 15hrs, provavelmente saiu de dentro e deve estar pelas redondezas.
                        O mesmo é muito carinhoso, educado e responde muito bem pelo nome.</div>
                    <div className='bts'>    
                    <button className='botao'>Perdido</button>
                    </div>
            </div>
                </div>
            </div>
        </main>
    )
}