import './index.scss'
import DadoUser from '../../../components/dados/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin'
import NavBarAdmin from '../../../components/navBarAdmin'
import { useEffect, useState } from 'react'
import { alterarInfoAdmin, buscarAdminInfo } from '../../../api/admin/adminAPI'
import { toast } from 'react-toastify'
import storage from 'local-storage';

export default function PerfilAdm() {
    const [info, setInfo] = useState({
        nm_admin: '',
        ds_email: '',
        ds_senha: ''
    });
    const [canEdit, setCanEdit] = useState(false);
    
    async function carregar() {
        try {
            const [r] = await buscarAdminInfo(storage('admin-logado').id);
            setInfo({
                id_admin: r.id_admin,
                nm_admin: r.nm_admin,
                ds_email: r.ds_email,
                ds_senha: r.ds_senha
            });
        } catch (error) {
            toast.dark(error.response.data);
        }
    }

    async function salvar() {
        try {
            const r = await alterarInfoAdmin(info);
            toast.dark('Alteraçoes feitas');
            setCanEdit(false);
        } catch (error) {
            toast.dark(error.response.data);            
        }
    }
    useEffect(()=>{
        carregar();
    },[]);
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
                                <input value={info.nm_admin} onChange={(e) => setInfo({...info, nm_admin: e.target.value})} disabled={!canEdit} type="text" className='input-perfil-admin' />
                            </div>

                            <div className='input-conjunt'>
                                <label className='c2-label'>Senha</label>
                                <input value={info.ds_senha} onChange={(e) => setInfo({...info, ds_senha: e.target.value})} disabled={!canEdit} type="text" className='input-perfil-admin' />
                            </div>
                        </div>

                        <div className='coluna-perfil'>

                            <div className='input-conjunt'>
                                <label className='c2-label'>Email</label>
                                <input value={info.ds_email} onChange={(e) => setInfo({...info, ds_email: e.target.value})} disabled={!canEdit} type="text" className='input-perfil-admin' />
                            </div>

                            {canEdit && 
                                <button onClick={() => salvar()} className='c2-button'>Salvar</button>
                            }

                            {!canEdit && 
                                <button onClick={() => setCanEdit(true)} className='c2-button'>Editar</button>
                            }
                        </div>
                    </div>
                </div>


            </div>

        </main>
    );

}