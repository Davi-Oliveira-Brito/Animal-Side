import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SidebarUser from '../../../components/sidebarUsuario/index.js';

// Imports
import storage from 'local-storage';

// API
import { alterarInformacoes, listarInformacoes } from '../../../api/usuario/usuarioAPI';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify'

export default function PerfilUser(){
    const [usuario, setUsuario] = useState([]);
    const [naoPodeEditar, setNaoPodeEditar] = useState(true);
    async function carregarUsuario() {
        try {
            const r = await listarInformacoes(storage('usuario-logado').id);
            setUsuario(r);
        } catch (error) {
            toast.dark('Ops: ' + error.message);
        }
    }


    async function editar() {
        toast.dark('✏️ Editando...', {autoClose: 1000});
        setNaoPodeEditar(false);        
    }

    async function salvar(){
        try {
            let r = await alterarInformacoes(usuario, storage('usuario-logado').id);
            console.log(r);
            setNaoPodeEditar(true);            
            toast.dark('✅ Alterações Salvas');
        } catch (error) {
            console.log(error);
            toast.dark(error.response.data);
        }
    }

    useEffect(()=>{
        carregarUsuario();
    },[]);
    console.log(usuario);
    return(
        <main className="user-perfil">
            <NavBarAdmin/>
            <SidebarUser/>
            <div className='columns'>
                <div>
                    <label>Nome</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.NM_USUARIO === null ? '' : usuario.NM_USUARIO  } onChange={(e) => setUsuario({...usuario, NM_USUARIO: e.target.value})} type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.DS_EMAIL === null ? '' : usuario.DS_EMAIL} onChange={(e) => setUsuario({...usuario, DS_EMAIL: e.target.value})} type="text" />
                </div>
                <div>
                    <label>Telefone</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.DS_TELEFONE === null ? '' : usuario.DS_TELEFONE} onChange={(e) => setUsuario({...usuario, DS_TELEFONE: e.target.value})} type="text" />
                </div>
                <div>
                    <label>Senha</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.DS_SENHA === null ? '' : usuario.DS_SENHA} onChange={(e) => setUsuario({...usuario, DS_SENHA: e.target.value})} type="password" />
                </div>
                
                <div>
                    <label>Data de nascimento</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={String(usuario.DT_NASCIMENTO).substring(0, 10)} onChange={(e) => setUsuario({...usuario, DT_NASCIMENTO: e.target.value})} type="date" />
                </div>
                
                
                <div>
                    <label>Tipo de residencia</label>
                    <select disabled={naoPodeEditar} placeholder='-' value={usuario.TP_RESIDENCIA} onChange={(e) => setUsuario({...usuario, TP_RESIDENCIA: e.target.value})}>
                        <option>Casa</option>
                        <option>Apartamento</option>
                        <option>Chacara</option>
                    </select>
                </div>
                
                
                <div>
                    <label>Renda</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.VL_RENDA === null ? '' : usuario.VL_RENDA} onChange={(e) => setUsuario({...usuario, VL_RENDA: Number(e.target.value)})} type="number" />
                </div>
                <div>
                    <label>Quantas pessoas tem na casa ?</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.QTD_PESSOAS_CASA === null ? '' : usuario.QTD_PESSOAS_CASA } onChange={(e) => setUsuario({...usuario, QTD_PESSOAS_CASA: e.target.value})} type="text" />

                </div>
                <div>
                    <label>Possui outro animal ?</label>
                    <select disabled={naoPodeEditar} placeholder='-' value={usuario.BT_ANIMAIS_CASA === null ? '' : usuario.BT_ANIMAIS_CASA} onChange={(e) => setUsuario({...usuario, BT_ANIMAIS_CASA: Boolean(e.target.value)})}>
                        <option value={true} >Sim</option>
                        <option value={false}>Não</option>
                    </select>

                </div>
                
                <div>
                    <label>Endereço</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.DS_ENDERECO === null ? '' : usuario.DS_ENDERECO} onChange={(e) => setUsuario({...usuario, DS_ENDERECO: e.target.value})} type="text" />

                </div>
                
                <div>
                    <label>Tempo sozinho (animal)</label>
                    <input disabled={naoPodeEditar} placeholder='-' value={usuario.TM_TEMPO_SOZINHO_ANIMAL === null ? '' : String(usuario.TM_TEMPO_SOZINHO_ANIMAL).substring(0,8)} onChange={(e) => setUsuario({...usuario, TM_TEMPO_SOZINHO_ANIMAL: e.target.value})} type="time" />

                </div>
                <div>
                    <label style={{visibility: 'hidden'}}>Nome</label>
                    {naoPodeEditar === true &&
                        <div onClick={()=> editar()}> Editar </div>
                    }
                    {naoPodeEditar === false &&
                        <div onClick={()=> salvar(true)}> Salvar </div>
                    }
                </div>
        
            </div>
        </main>
    );

}