import './index.scss'
import Navbar from '../../components/navBar';

export default function PageAjude(){
    return(
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


        </main>
    );
}