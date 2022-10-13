import './index.scss'
import NavBar from '../../components/navBar/index.js'
import CardAdote from '../../components/LadingPage/CardAdote/index.js'
import CardBicho from '../../components/LadingPage/CardBichos/index.js'

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

            <section className="f6-lading">
                <div className="f6-text">
                    <h1 className="f6-title">Alguns de nosso pets</h1>
                    <p className="f6-desc">veja alguns de nossos bichinhos para adoção</p>
                </div>

                <div className="f6-cards">
                    <CardBicho
                        cor="azul"
                        image="/assets/images/dogBranco.png"
                        nome="spike"
                        desc="Spike é uma cachorro legal que gosta 
                    muito de brincadeiras"
                    />

                    <CardBicho
                        cor="laranja"
                        image="/assets/images/lola.png"
                        nome="lola"
                        desc="lola é uma gata super acelerada e ama correr e passear"
                    />

                    <CardBicho
                        cor="verde"
                        image="/assets/images/carioca.png"
                        nome="carioca"
                        desc="carioca é um papagaio muito falante que gosta muito de conversa"
                    />

                    <CardBicho
                        cor="verde"
                        image="/assets/images/mike.png"
                        nome="mike"
                        desc="mike é um cachorro muito sagaz e adora ajudar as pessoas"
                    />

                    <CardBicho
                        cor="azul"
                        image="/assets/images/bob.png"
                        nome="bob"
                        desc="bob é fofo e tra energias boas ao ambiente "
                    />

                    <CardBicho
                        cor="laranja"
                        image="/assets/images/lana.png"
                        nome="lana"
                        desc="lana é uma gata muito esperta que gosta muito de brincar bolas de lã"
                    />
                </div>
            </section>
            <section className="f7-lading">
                <div className="sub-f7">
                    <h1 className="f7-title">Perdeu seu animalzinho?</h1>
                    <p className="f7-desc">Sair pela <span>procura</span> do seu bichinho nunca foi tão fácil! Facilite seu trabalho e diminua o tempo longe dele.</p>
                    <button className="f7-button">Cadastre</button>
                </div>
            </section>

            <section className="f8-lading">
                <div className="sub-f8">
                    <h1 className="f8-title">ajude a encontrar</h1>
                    <p className="f8-desc">veja o <span>feed</span> dde cadastros e deixe um comentário caso tenha visto o animal que estão procurando.</p>
                    <button className="f8-button">ajude</button>
                </div>
            </section>


            <section className="f9-lading">
                <h1 className="f9-title">Marcas Parceiras</h1>

                <div className="marcas">
                    <img src="/assets/images/petz.png" alt="" />
                    <img src="/assets/images/nutropica.png" alt="" />
                    <img src="/assets/images/whiskas.png" alt="" />
                    <img src="/assets/images/petsociety.png" alt="" />
                    <img src="/assets/images/bawwaw.png" alt="" />
                    <img src="/assets/images/petlove.png" alt="" />
                </div>
            </section>

            <section className="f10-lading">
                <div className="f10-sub">
                    <h1 className="f10-title">localização</h1>

                    <div className="f10-dados">
                        <div className="dados-item1">
                            <img className="image" src="/assets/images/loc.png" alt="" />
                            <p> Av. Moaci, 416 - Moema, São Paulo
                                SP, 04083-000</p>
                        </div>

                        <div className="dados-item2">
                            <img src="/assets/images/relogio.png" alt="" />
                            <p>Seg a Sex 9hrs até 17hrs
                                Sáb e Dom 10 as 15hrs</p>
                        </div>

                        <div className="dados-item3">
                            <img src="/assets/images/Phone.png" alt="" />
                            <p>     55 (11) 5917-9846
                                55 (11) 91865-9266</p>
                        </div>

                        <div className="dados-item4">
                            <img src="/assets/images/email.png" alt="" />
                            <p>animal.side@gmail.com</p>
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.806196523009!2d-46.664217199999996!3d-23.611282499999998!2m3!
                        1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0c2464805b%3A0x89a2a0fef31e3cf!2sAv.%20Moaci%2C%20416%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004083-000!5e0!3m2!1spt-BR!2sbr!4v1651966666528!5m2!1spt-BR!2sbr"
                        width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

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