import React, { useEffect, useState } from 'react';
import './index.scss';

import { loginAdmin } from '../../api/loginAdmin.js'; 

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import localStorage from 'local-storage';
import storage from 'local-storage';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function logar(){
      try{
        const resposta = await loginAdmin(email.trim(), senha.trim());
        storage('admin-logado', resposta)
        toast.dark('Admin Logado');
        navigate('/cadastro');

      }catch(error) {
          toast.error(error.response.data.error);
      }
    }

    setTimeout(()=>{
      if(storage('admin-logado')){
        navigate('/cadastro');
      }
    }, 2000)

    useEffect(()=>{
      if(storage('admin-logado')){
        navigate('/cadastro');
      }
    },[])
    return (
        <main className="admin-login-main">
            <div className="admin-right">
                <h1 className="admin-login-title">Bem-vindo administrador</h1>

                <p className="admin-login-text">Adicione as suas credendicias e tenha acesso ao sistema e suas edições. </p>
            
                <div className="admin-inputs">
                    <input className="email" type="text" placeholder="EMAIL"  value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="senha"type="password" placeholder="SENHA" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <a>Esqueceu sua senha?</a>
                </div>

                <button className="admin-login-button" onClick={logar}>Entrar</button>

                <p className="admin-crie-sua-conta">Não tem uma conta? Cadastre-se</p>

                <div className="admin-left">
                    <div className="imagem"><img src="" alt="" /></div>
                </div>
            </div>
        </main>

        );

}