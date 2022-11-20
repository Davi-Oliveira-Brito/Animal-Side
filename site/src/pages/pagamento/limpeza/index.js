import './index.scss';

//componentes
import Navbar from '../../../components/navBar';

export default function PagamentoLimpeza(){
    return(
        <main className='veterinario-pagamento'>
            <Navbar/>

            <div className="veterinario-sub">

                <div className='principal-area'>

                    <div className='pix'>
                        <div className='pix-texto'> 
                            <img src="/assets/images/pix.png" alt="" />
                            <p>pix</p>
                        </div>

                        <img className='qr-code' src="/assets/images/qr-code.png" alt="" />
                    </div>

                    <div className='text'>
                        <p className='kit'>Kit Limpeza  R$60,00</p>

                        <div className='chaves'>
                            
                            <p className='title-chave'>Nossas chaves (pix)</p>
                            <p><span>Cnpj:</span> 22.001.000/0001-10</p>
                            <p><span>Celular:</span> (11) 9 9112-3398 </p>
                            <p><span>Email:</span> AnimalSide@gmail.org.com</p>

                        </div>
                    </div>

                </div>

                <div className='seguranca'>
                    <img src="/assets/images/cadeado.png" alt="" />
                    <p>O nosso sistema de doação é seguro, não faremos nada que comprometa nosso usuário</p>
                </div>

                <div className='bottom-pagamento'>
                    <hr/>
                </div>

            </div>


        </main>
    );
}