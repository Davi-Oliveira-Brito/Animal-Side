import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import DadoUser from '../../../components/dados';
import NavBarAdmin from '../../../components/navBarAdmin';
import ComentarioComp from '../../../components/comentariosComp';
import storage from 'local-storage';
export default function UserFeedBack() {
   return (
      <main className="feedback-page">
            <NavBarAdmin />
            <SidebarUser />
            <div className="coment-right">
                <div className='dado'>
                    <DadoUser
                        nome={storage('usuario-logado').nome}
                        regiao={storage('usuario-logado').endereco} />
                </div>

                <div className='comp'>
                    <ComentarioComp
                    primeiraLetra='A'
                    nome='Administrador'
                    coment="Parabens seu merda, ganhou um novo amigo"/>
                </div>

            </div>
        </main>
   );
}