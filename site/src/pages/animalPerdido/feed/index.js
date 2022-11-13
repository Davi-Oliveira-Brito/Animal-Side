import './index.scss'

//componentes
import SideBar from '../../../components/sideBar';
import Navbar from '../../../components/navBar';
import CardAnimalPerdido from '../../../components/cardFeedAnimalPerdido';

export default function FeedAnimalPerdido() {
    return (
        <main className='feed-animal-perdido'>

            <Navbar />

            <div className='conteudo-feed'>

                <SideBar />

                <div className='right'>

                    <div className='top'>
                        <p className='top-title'>PROCURE SEU ANIMAL E AJUDE OUTRAS PESSOAS A ENCONTRAREM</p>

                        <input className='pesquisa' type="text" placeholder='Procure seu bichinho...' />
                    </div>

                    <div className='bichinhos'>
                            <CardAnimalPerdido/>
                    </div>

                </div>

            </div>


        </main>

    );
}