import React, { useState } from 'react'

//Scss
import './index.scss';

// Components
import Navbar from '../../components/navBar'
import Footer from '../../components/footer';

export default function QuemSomos() {
    const[nome, setNome] = useState();

    return (
        <main className='page-quemSomos'>
        <Navbar/>
        <div className='hero-section'>
            <div className='text'>
                <p>ANIMAL SIDE</p>
                <p>Vendo um lado para todos os bichinhos</p>
            </div>
            <div className='image'><img src="/assets/images/araraVerde.png" alt="" /></div>
        </div>

        <div className='f2-quemsomos'>
            <div className='title'>NOSSA HISTÓRIA</div>
            <div className='item'>
                <div className='text'>
                    Somos uma ong, criada no ano de 2021, com o intuito de ajudar os animais. A criação da
                    ONG foi inicializada por um grupo de 4 amigos, demos a iniciativa e hoje estamos fazendo o
                    melhor pelos bichinhos. 
                </div>
                <div><img src="/assets/images/doguinhodoguinho.png" alt="" /></div>
            </div>
            
            <div className='item'>
                <div><img src="/assets/images/passaropassaro.png" alt="" /></div>
                <div className='text'>
                A ideia surgiu, quando um amigo perdeu seu animal, imprimiu
                vários panfletos e saiu distribuindo pelo bairro, divulgou em rede social, mas não era uma rede própria para isso, então a partir dai, criamos a Animal Side.
                </div>
            </div>
            
            <div className='item'>
                <div className='text'>
                    Nossa rede não é somente para divulgação de animais perdidos, nós temos uma parte para
                    aceitar doações aos animais que resgatamos da rua (ração, brinquedos, etc.) e temos também uma aba para que você possa adotar um animal que está conosco, ou ainda, divulgue nossa causa. 
                </div>
                <div><img src="/assets/images/hamsterhamster.png" alt="" /></div>
            </div>

        </div>



        <div className='f3-quemsomos'>
            <div>TOUR PELA ONG</div>
            <div className='images'>
                <img src="/assets/images/tourong01.png" alt="" />
                <img src="/assets/images/tourong02.png" alt="" />
                <img src="/assets/images/tourong03.png" alt="" />
            </div>
        </div>



        <div className='f4-quemsomos'>
            <div className='container'>
                <div className='title'>Faça parte dessa história </div>
                <div className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium </div>
                <div className='botao'>Nos ajude</div>
            </div>
        </div>

        
        <Footer/>



    </main> 
  )
}
