import './index.scss'
import NavBar from '../../components/navBar/index.js'

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
        </main>
    );
}