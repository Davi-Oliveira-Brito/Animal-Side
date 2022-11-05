import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';
import DadoUser from '../../../components/dados/index.js';
import ComentarioComp from '../../../components/comentariosComp/index.js';


export default function UserComent() {

    return (
        <main className="coment-page">
            <NavBarAdmin />
            
            <div className='coment-left'>
                <SidebarUser/>
            </div>
            

            <div className="coment-right">
                <div className='dado'>
                    <DadoUser
                    nome="Davi Oliveira Brito"
                    regiao="São Paulo, SP"/>
                </div>

                <div className='comentarios'>
                    
                    <ComentarioComp
                    nome="Davi Oliveira Brito"
                    coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque
                    no dia 28/08 (domingo), por volta das 12hrs."
                    />
                    <ComentarioComp
                    nome="Davi Oliveira Brito"
                    coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque
                    no dia 28/08 (domingo), por volta das 12hrs."
                    />
                    <ComentarioComp
                    nome="Davi Oliveira Brito"
                    coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque
                    no dia 28/08 (domingo), por volta das 12hrs."
                    />
                    <ComentarioComp
                    nome="Davi Oliveira Brito"
                    coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque
                    no dia 28/08 (domingo), por volta das 12hrs."
                    />
                    <ComentarioComp
                    nome="Davi Oliveira Brito"
                    coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque
                    no dia 28/08 (domingo), por volta das 12hrs."
                    />
                    
                </div>
                

            </div>
        </main>
    );

}