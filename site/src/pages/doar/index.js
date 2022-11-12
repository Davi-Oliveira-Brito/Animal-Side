import './index.scss'

import { useNavigate } from 'react-router-dom';

//Componentes
import NavBar from '../../components/navBar/index.js'

export default function DoarPage() {

    const navigate = useNavigate();

    return (
        <main className='doar-main'>
            <div className='top-nav'>
                <NavBar />
            </div>

            <div className='kits'>
                <div className='linha1-kits'>

                    <div className="kit-veterinario">
                        <div className='kit-texts'>
                            <p className='kit-title'>Kit veterinario r$120,00</p>
                            <p className='kit-desc'>Vacinas, soro, cateter, esparadrapo, medicação.</p>
                        </div>

                        <button className='kit-button' onClick={() => navigate('/pagamento/veterinario')}>DOAR</button>
                    </div>

                    <div className="kit-limpeza">
                        <div className='kit-texts'>
                            <p className='kit-title'>Kit limpeza r$60,00</p>
                            <p className='kit-desc'>Produtos de higiene que são destinados aos cuidados dos bichinhos. </p>
                        </div>

                        <button className='kit-button' onClick={() => navigate('/pagamento/limpeza')}>DOAR</button>
                    </div>

                </div>

                <div className='linha2-kits'>

                    <div className="kit-alimentacao">
                        <div className='kit-texts'>
                            <p className='kit-title'>Kit alimentação r$210,00</p>
                            <p className='kit-desc'>Ração, petiscos, alpiste.</p>
                        </div>

                        <button className='kit-button' onClick={() => navigate('/pagamento/alimento')}>DOAR</button>
                    </div>

                    <div className="kit-qualquer">
                        <div className='kit-texts'>
                            <p className='kit-title'>doe o valor que puder r$?</p>
                            <p className='kit-desc'> ajude a causa com o valor que puder </p>
                        </div>

                        <button className='kit-button' onClick={() => navigate('/pagamento/qualquer')}>DOAR</button>
                    </div>


                </div>
            </div>


        </main>
    );
}