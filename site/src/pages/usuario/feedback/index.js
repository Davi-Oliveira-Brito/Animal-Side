import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import DadoUser from '../../../components/dados';
import NavBarAdmin from '../../../components/navBarAdmin';

export default function feedback() {
   return (
      <main className='feedback-page'>
         <SidebarUser />
         <div className='top'>
            <div><NavBarAdmin /></div>
            <div className='comp'><DadoUser nome="Rosana Soares" regiao="São Paulo, zona sul" /></div>
            <div className='cardfeedback'>
               <div className='left'>
                  <img className='admin' src='assets/images/admin.png' alt='' />
               </div>
               <div className='right'>
                  <div>Administrador</div>
                  <div>Parabéns, sua adoção foi permitida!  Venha conhecer seu novo amigo dia 03/09/2022</div>
               </div>
            </div>
         </div>
      </main>
   );
}