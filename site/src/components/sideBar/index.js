import './index.scss'

export default function SideBar() {
    return (
        <main className="side-feed" >
            <section className="side-sub-feed">
                <div className="animais">
                    <p className="side-title">Animais</p>
                    <p className="side-text">Cachorros</p>
                    <p className="side-text">Gatos</p>
                    <p className="side-text">Pássaros</p>
                    <p className="side-text">Porquinho da Índia</p>
                </div>

                <div className="sexo">
                    <p className="side-title">Sexo</p>
                    <div className="check-side">
                        <input type="checkbox" placeholder />
                        <p>Macho</p>
                    </div>
                </div>

                <div className="porte">
                    <p className="side-title">Porte</p>
                    <div className="check-side">
                        <input type="checkbox" placeholder />
                        <p className="side-text">Macho</p>
                    </div>
                </div>

                <div className="idade">
                    <p className="side-title">Idade</p>
                    <div className="check-side">
                        <input type="checkbox" placeholder />
                        <p className="side-text">Macho</p>
                    </div>
                </div>
            </section>
        </main>
    )
}