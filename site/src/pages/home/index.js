import './index.scss'
import NavBar from '../../components/navBar/index.js'
import CardAdote from '../../components/LadingPage/CardAdote/index.js'

export default function LadingPage() {
    return (
        <main className="lading-mom">
            <NavBar />

            <section className="hero-sec">
                <div className="sub-hero">
                    <div className="text-area">
                        <h1 className="hero-title">Adote Hoje</h1>
                        <p className="texto-hero">
                            “A <span>compaixão</span> PARA COM OS <span>animais</span> É DAS MAIS
                            NOBRES VIRTUDES DA<span>Natureza Humana</span>
                        </p>
                        <p className="nome">-Charles Darwin</p>

                        <button className="hero-button">Adotar</button>
                    </div>

                </div>
                <div className="img-hero">
                    <img src="/assets/images/dogHero.png" alt="" />
                </div>
            </section>

            <section className="faixa2-lading">
                <div className="f2-sub">
                    <div className="f2-top">
                        <h1 className="title">escolha seu amigo perfeito</h1>
                        <p className="text">Procure diretamente no filtro que você tem interesse em adotar.</p>
                    </div>
                    <div className="f2-cards">
                        <CardAdote
                            classe="azul"
                            nome="CACHORROS"
                            desc="Desde sempre seu melhor amigo"
                            image="/assets/images/cachorrinho.png"
                        />

                        <CardAdote
                            classe="laranja"
                            nome="GATOS"
                            desc="Cat person ? Sem problemas temos esses felinos fofos também."
                            image="/assets/images/gatinho.png"
                        />

                        <CardAdote
                            classe="verde"
                            nome="PASSAROS"
                            desc="Quer um animalzinho voador? Sem problema"
                            image="/assets/images/papagaio.png"
                        />


                    </div>
                    <div className="f2-button">
                        <button>Mais</button>
                    </div>
                </div>
            </section>

            <section className="faixa3-lading">

                <img className="f3-dog" src="/assets/images/cachorrao.png" alt="" />

                <div className="f3-sub">
                    <div className="f3-item">
                        <img src="/assets/images/maisAmor.png" alt="" />
                        <p className="f3-title">Mais Amor</p>
                        <p className="f3-desc1">Eu sonho com um mundo onde você e
                            eu viveríamos por mil anos para nos amarmos</p>
                    </div>

                    <div className="f3-item">
                        <img src="/assets/images/ajudaAnimais.png" alt="" />
                        <p className="f3-title">Ajuda Aos Animais</p>
                        <p className="f3-desc2">Ajudar os bichinhos não custa muito, faça o que puder.
                            Fazendo o básico, você pode ajudar um bichinho</p>
                    </div>

                    <div className="f3-item">
                        <img src="/assets/images/umaNovaCasa.png" alt="" />
                        <p className="f3-title">Uma Nova Casa</p>
                        <p className="f3-desc3">Não faça parte do comércio clandestino de animais, ADOTE!</p>
                    </div>
                </div>
            </section>

            <section className="f4-lading">
                <div className="f4-sub">
                    <p className="f4-title">AJUDE NOSSA CAUSA DOANDO </p>
                    <p className="f4-desc">A <label>ANIMAL SIDE</label> ela se mantem através das doações, sejam as mesmas destinadas aos gastos específicos ou o valor que você conseguir dentro de seu orçamento.</p>
                </div>
            </section>

            <section className="f5-lading">
                <div className="f5-sub">
                    <h1 className="f5-title">Conheça nosso kits</h1>

                    <div className="f5-kits">
                        <div className="kit">
                            <img className="image" src="/assets/images/limpeza.png" alt="deu ruim" />
                            <p className="title">limpeza</p>
                            <p className="desc1">Produtos de higiene que são
                                destinados aos cuidados</p>
                        </div>

                        <div className="kit">
                            <img className="image" src="/assets/images/alimentacao.png" alt="deu ruim" />
                            <p className="title">limpeza</p>
                            <p className="desc2">Rações, petiscos, alpistes</p>
                        </div>

                        <div className="kit">
                            <img className="image" src="/assets/images/veterinario.png" alt="deu ruim" />
                            <p className="title">limpeza</p>
                            <p className="desc3">Vacinas, soro, cateter, esparadrapo, medicação</p>
                        </div>

                        <div className="kit">
                            <img className="image" src="/assets/images/livre.png" alt="deu ruim" />
                            <p className="title">limpeza</p>
                            <p className="desc4">Nos mande o valor que você tiver.</p>
                        </div>
                    </div>

                    <button className="f5-button">DOE</button>
                </div>

            </section>
        </main>
    );
}