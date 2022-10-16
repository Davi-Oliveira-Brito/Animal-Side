import './index.scss'
import Navbar from '../../../components/navBar';

export default function PageComentario(){
    return(
        <main className='page-comentario'>
            <Navbar/>
            <div className='page'>
               <div className='left'> <img className='image' src="assets/images/Playing with dog.png" alt=""/> </div>
                <div className='right'>
                <h1 className='text'> CONTE POR QUE VOCÊ 
                VAI QUERER ADOTAR  
                NOSSO BICHINHO? </h1>
                <textarea placeholder='Conte aqui'></textarea>
                    <div className='direcao'>
                    <button className='botao'>Enviar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}