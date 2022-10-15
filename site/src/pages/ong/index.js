import './index.scss'
import NavBar from '../../components/navBar/index.js'
import CardValor from '../../components/ongpage/cardValor/index.js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function PageOng() {

    return (
        <main className="ong-mom">
            <NavBar />

            <section className="ong-hero">
                <div className="sub-hero">
                    <h1 className='title'>Todos eles merecem uma chance de amor!</h1>
                    <p className="desc">Conheça nossa ONG</p>
                </div>
            </section>

            <section className="carro">
            </section>

            <section className="f3-ong">
                <div className='f3-sub'>
                    <h1 className="f3-title">MISSÃO</h1>


                    <p className="text1">
                        Queremos <span>transformar</span> a sociedade, e gerar impacto na vida de cães, gatos e outras espécies domésticas.
                    </p>

                    <p className='text1'>
                    <span>Combatemos</span> os maus-tratos contra os animais e defendemos os seus direitos com políticas públicas eficientes. 
                    Trazendo assim alegria na vida desses pets e de seus novos donos.
                    </p>

                </div>
            </section>

            <section className="f4-ong">
                <h1 className="f4-title">Valores</h1>
                
                <div className="ong-cards">
                    <CardValor
                    image="/assets/images/seguranca.png"
                    titulo="Segurança"
                    desc="Garantimos ambientes seguros em nossas relações."                    
                    />
                    <CardValor
                    image="/assets/images/responsabilidade.png"
                    titulo="Responsabilidade"
                    desc="Agentes de proteção para com a vida animal."                    
                    />
                    <CardValor
                    image="/assets/images/amor.png"
                    titulo="Amor"
                    desc="Oferecemos o afeto mais sincero aos nossos bichinhos."                    
                    />
                    <CardValor
                    image="/assets/images/confianca.png"
                    titulo="Confiança"
                    desc="Acreditamos na sinceridade que existe para se fazer a adoção."                    
                    />
                </div>
            </section>

            <section className="f5-ong">
                <div className="f5-sub">
                    <img src="/assets/images/gradeDOGs.png" alt="" />

                    <div className="f5-text">
                        <h1 className='f5-title'>Feira de adoção</h1>

                        <p className='text'>
                        A <span> FEIRA DE ADOÇÃO </span> serve para encontrarmos novos lares para os nossos animalzinhos.
                        </p>

                        <p className="text">
                        Fique dentro das datas e encontre conosco o melhor companheiro para você.
                        </p>

                        <button className="f5-button">
                            Ver Calendário
                        </button>
                    </div>
                </div>
            </section>

            
            <section className="footer">
                    <div className="sub">
                        <div className="empresa">
                            <p>empresa</p>
                            <a href="">A ong</a>
                            <a href="">Quem Somos?</a>
                            <a href="">Feira</a>
                        </div>

                        <div className="produto">
                            <p>produto</p>
                            <a href="">Doe</a>
                            <a href="">Adotar</a>
                            <a href="">Cadastar</a>
                        </div>
                    </div>
            </section>

        </main>

    );
}