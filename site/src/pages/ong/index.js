import './index.scss'
import NavBar from '../../components/navBar/index.js'
import CardValor from '../../components/ongpage/cardValor/index.js'
import React from 'react';
import Footer from '../../components/footer/index.js';


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

            <section className='f1-ong'>
                <h1 className="titulo">Nossas Atividades</h1>
                <div className='f1-sub'>
                    <div className="texts">
                        <h1 className='title'>Adoção</h1>
                        <p className='desc'>
                           Encontre um novo amor e um membro para aumentar sua familia 
                        </p>
                        <button className='botao'> quero adotar </button>
                    </div>
                </div>
            </section>

            <section className='f1-ong'>
                <h1 className="titulo">Nossas Atividades</h1>
                <div className='f1-sub'>
                    <div className="texts">
                        <h1 className='title'>Adoção</h1>
                        <p className='desc'>
                           Encontre um novo amor e um membro para aumentar sua familia 
                        </p>
                        <button className='botao'> quero adotar </button>
                    </div>
                </div>
            </section>

            <section className='f2-ong'>
                <h1 className="titulo">Nossas Atividades</h1>
                <div className='f2-sub'>
                    <div className="texts">
                        <h1 className='title'>Doação</h1>
                        <p className='desc'>
                        Ajude nossa causa, doando uma quantia em dinheiro, ração ou brinquedos.
                        </p>
                        <button className='botao'> quero doar </button>
                    </div>
                </div>
            </section>

            <section className='f3-ong'>
                <h1 className="titulo">Nossas Atividades</h1>
                <div className='f3-sub'>
                    <div className="texts">
                        <h1 className='title'>Cadastre</h1>
                        <p className='desc'>
                            Perdeu o seu companheiro(a)? Faça um cadastro para que encontremos o mesmo.
                        </p>
                        <button className='botao'> quero cadastrar </button>
                    </div>
                </div>
            </section>




            <section className="f4-ong">
                <div className='f4-sub'>
                    <h1 className="f4-title">MISSÃO</h1>


                    <p className="text1">
                        Queremos <span>transformar</span> a sociedade, e gerar impacto na vida de cães, gatos e outras espécies domésticas.
                    </p>

                    <p className='text1'>
                    <span>Combatemos</span> os maus-tratos contra os animais e defendemos os seus direitos com políticas públicas eficientes. 
                    Trazendo assim alegria na vida desses pets e de seus novos donos.
                    </p>

                </div>
            </section>

            <section className="f5-ong">
                <h1 className="f5-title">Valores</h1>
                
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

            <section className="f6-ong">
                <div className="f6-sub">
                    <img src="/assets/images/gradeDOGs.png" alt="" />

                    <div className="f6-text">
                        <h1 className='f6-title'>Feira de adoção</h1>

                        <p className='text'>
                        A <span> FEIRA DE ADOÇÃO </span> serve para encontrarmos novos lares para os nossos animalzinhos.
                        </p>

                        <p className="text">
                        Fique dentro das datas e encontre conosco o melhor companheiro para você.
                        </p>

                        <button className="f6-button">
                            Ver Calendário
                        </button>
                    </div>
                </div>
            </section>

            
            <Footer/>

        </main>

    );
}