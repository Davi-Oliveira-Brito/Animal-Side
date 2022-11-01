import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';
import Dados from '../../../components/dados/user/index.js'

export default function PerfilUser(){
    return(
        <main className="user-perfil">
            <NavBarAdmin/>
            <SidebarUser/>

        </main>
    );

}