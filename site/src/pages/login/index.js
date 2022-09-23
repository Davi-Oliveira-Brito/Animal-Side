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
        storage('usuario-logado', resposta)
        
        toast.dark('Usuario Logado');

      }catch(error) {
          toast.error(error.response.data.error);
      }
    }

    setTimeout(()=>{
      navigate('/')
    }, 2000)

    useEffect(()=>{
      if(storage('usuario-logado')){
        navigate('/');
      }
    },[])
    return (
        <main className="login-main">
            <div className="left">
                <h1 className="login-title">Faça Seu Login</h1>

                <p className="login-text">Faça o seu login para ter acesso a suas
                 informações, fazer posts, e ajudar as pessoas</p>

                <div className="inputs">
                    <input className="email" type="text" placeholder="EMAIL"  value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="senha"type="password" placeholder="SENHA" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <a>Esqueceu sua senha?</a>
                </div>

                <button className="login-button" onClick={logar}>ENTRAR</button>
                
                <p className="crie-sua-conta">Não tem uma conta? <a href="">Cadastre-se</a></p>

            </div>

            <div className="right">
                <button className="botao-direita">Pagina Inicial</button>
                <div className="imagem"><img src="/assets/images/login-image.png" alt="" /></div>
            </div>
        </main>


    );

}