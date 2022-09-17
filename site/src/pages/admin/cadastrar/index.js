import './index.scss'
import SideBar from '../../../components/sideBar/index.js'
import NavBar from '../../../components/navBar/index.js'


export default function PageCadastrar() {
    return (
        <main className="cadastro-page">

            <div className="left">
                <SideBar />
            </div>

            <div className="right">
               <div className="nav">
                <NavBar />
               </div>

               <div className="conteudo-cadastro">
                    
               </div>  
            </div>

        </main>


    );
}
