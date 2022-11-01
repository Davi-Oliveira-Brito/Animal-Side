import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';

export default function PerfilUser(){
    return(
        <main className="user-perfil">
            <NavBarAdmin/>
            <SidebarUser/>
            <div className='columns'>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                
                
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
        
            </div>
        </main>
    );

}