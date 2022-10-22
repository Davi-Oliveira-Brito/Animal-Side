import './index.scss'
import Navbar from '../../components/navBar/index.js';
import Footer from '../../components/footer/index.js';

export default function PageAjude() {
    return (
        <main className='ajude-mom'>
            <Navbar/>
            <section className='hero-ajude'>
                <div className='sub-hero'>
                    <div className='text-area'>
                        <h1 className='title'>Voce também pode fazer parte dessa luta</h1>
                        <p className='desc'>Ajude várias vidas a encontrarem novos lares.</p>
                    </div>
                </div>
            </section>

            <section className='f1-ajude'>
                <div className='f1-sub'>
                    <div className="texts">
                        <h1 className='title'>O seu amparo é fundamental</h1>
                        <p className='desc'>
                            Com a sua <label>contribuição</label>, nós conseguimos dar continuidade no nosso projeto, resgatando e encontrando novos lares.
                            Além de auxiliar na busca de novas famílias, também fortalece a luta contra o abandono e maus-tratos.
                        </p>
                        <button className='botao'> Vou doar</button>
                    </div>
                </div>
            </section>

            <section className='f2-ajude'>
                <div className='f2-sub'>
                    <div className="texts">
                        <h1 className='title'>Adote</h1>
                        <p className='desc'>
                            A adoção é um ato de muito <label>amor</label>, mas também de <label>responsabilidade</label>. Para adotar, você se compromete com o bichinho, dando afeto e um lar seguro. 
                            Faça a diferença na sua vida e na de um animalzinho.
                        </p>
                        <button className='botao'> Vou doar</button>
                    </div>
                </div>
            </section>


        
            <section className='f3-ajude'>
                <div className='f3-sub'>
                    <div className="texts">
                        <h1 className='title'>Qualquer ajuda é bem-vinda</h1>
                        <p className='desc'>
                        Sua participação é <label>essencial</label> para o nosso projeto, 
                        e caso não consiga nos ajudar por questões financeiras, divulgue a ANIMAL SIDE para os conhecidos.
                        </p>
                      
                    </div>
                </div>
            </section>
        
        <Footer/>

        </main>
    );
}