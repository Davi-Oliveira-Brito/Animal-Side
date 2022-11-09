import './index.scss'
import DadoUser from '../../../components/dados/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin'
import NavBarAdmin from '../../../components/navBarAdmin'

export default function PerfilAdm() {
    return (
        <main className='perfil-administrador'>
            <div>
                <SideBarAdmin />
            </div>
            <div className='right-perfil-admin'>
                <NavBarAdmin />
                <div className='conteudo-perfil-admin'>

                    <DadoUser
                        nome="Administrador"
                        regiao="São Paulo, Zona Sul"
                    />

                    <div className='inputs-perfil-admin'>
                        <div className='coluna-perfil'>

                            <div className='input-conjunt'>
                                <label className='c2-label'>Nome</label>
                                <input type="text" className='input-perfil-admin' />
                            </div>

                            <div className='input-conjunt'>
                                <label className='c2-label'>Senha</label>
                                <input type="text" className='input-perfil-admin' />
                            </div>
                        </div>

                        <div className='coluna-perfil'>

                            <div className='input-conjunt'>
                                <label className='c2-label'>Email</label>
                                <input type="text" className='input-perfil-admin' />
                            </div>

                            <button className='c2-button'>Editar</button>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    );

}