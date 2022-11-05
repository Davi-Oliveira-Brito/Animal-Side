import './index.scss'
import Navbar from '../../components/navBar/index.js';

export default function Doar() {
    return (
        <main className='pageDoar'>
            <div className='nav'><Navbar /></div>
            <div className='top'>
                <div className='card-1'>
                    <div className='left'>
                        <img src="assets/images/clip-1663 1.png" alt='' />
                    </div>
                    <div className='right'>
                        <div className='texto'>KIT VETERINÁRIO
                        R$ 120,00</div>
                        <p className='text'>Vacinas, soro, cateter,
                            esparadrapo, medicação.</p>
                        <button className='botao'>DOAR</button>
                    </div>
                </div>
                <div className='card-2'>
                    <div className='left'>
                        <img src="assets/images/clip-something-went-wrong 1.png" alt='' />
                    </div>
                    <div className='right'>
                        <div className='texto'>KIT LIMPEZA
                        R$ 60,00</div>
                        <p className='text'>Produtos de higiene
                            que são destinados
                            aos cuidados dos
                            bichinhos</p>
                        <button className='botao'>DOAR</button>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='card-3'>
                    <div className='left'>
                        <img src="assets/images/clip-boy-giving-food-to-his-dog 1.png" alt='' />
                    </div>
                    <div className='right'>
                        <div className='texto'>KIT ALIMENTAÇÃO
                        R$ 210,00</div>
                        <p className='text'>Ração, petiscos, alpiste</p>
                        <button className='botao'>DOAR</button>
                    </div>
                </div>

                <div className='card-4'>
                    <div className='left'>
                        <img src="assets/images/clip-new-message 1.png" alt='' />
                    </div>
                    <div className='right'>
                        <div className='texto'>DOE O VALOR QUE PUDER
                        R$ ?</div>
                        <p className='text'>Ajude a causa com
                            o valor que puder</p>
                        <button className='botao'>DOAR</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
