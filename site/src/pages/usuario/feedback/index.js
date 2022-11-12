import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import DadoUser from '../../../components/dados';
import NavBarAdmin from '../../../components/navBarAdmin';
import ComentarioComp from '../../../components/comentariosComp';

export default function UserFeedBack() {
   return (
      <main className='feedback-page'>
         <SidebarUser />
         <div className='top'>
            <div><NavBarAdmin /></div>
            <div className='comp'>
               <DadoUser nome="Rosana Soares" regiao="São Paulo, zona sul" />
            </div>
            <ComentarioComp
            nome="Administrador"
            coment="Eu vi um cachorro bem parecido com o da foto, perto do estacionamento do parque no dia 28/08 (domingo), por volta das 12hrs."/>
         </div>
      </main>
   );
}