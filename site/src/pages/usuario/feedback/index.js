import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import DadoUser from '../../../components/dados';
import NavBarAdmin from '../../../components/navBarAdmin';
import ComentarioComp from '../../../components/comentariosComp';

export default function UserFeedBack() {
   return (
      <main className="feedback-page">
            <NavBarAdmin />
            <SidebarUser />
            <div className="coment-right">
                <div className='dado'>
                    <DadoUser
                        nome="Davi Oliveira Brito"
                        regiao="São Paulo, SP" />
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