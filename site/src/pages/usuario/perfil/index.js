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
                    <label>Sobrenome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Data de nascimento</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Telefone</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Endereço</label>
                    <input type="text" />
                </div>
                
                
                <div>
                    <label>Renda</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Endereço</label>
                    <input type="t\ext" />
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
                    <label style={{visibility: 'hidden'}}>Nome</label>
                    <div> Editar </div>
                </div>
        
            </div>
        </main>
    );

}