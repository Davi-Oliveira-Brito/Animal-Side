import './index.scss'
import Navbar from '../../components/navBar/index.js';

export default function Doar() {
    return (
        <main className='pageDoar'>
            <Navbar />
            <div className='top'>
                <div className='left'>
                    <img src="assets/images/clip-1663 1.png" alt='' />
                </div>
                <div className='right'>
                    <h1>KIT VETERINÁRIO</h1>
                    <div>R$ 120,00</div>
                    <p>Vacinas, soro, cateter,
                        esparadrapo, medicação.</p>
                    <button>DOAR</button>
                </div>
            </div>
        </main>
    );
}