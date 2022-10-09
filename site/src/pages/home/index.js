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
        </main>
    );
}