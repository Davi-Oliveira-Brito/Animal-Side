import React, { useEffect, useState } from 'react';
import './index.scss';

import { loginUsuario } from '../../api/usuario/usuarioAPI';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function logar(){
      try{
        const resposta = await loginUsuario(email.trim(), senha.trim());
        storage('usuario-logado', {id: resposta.id, nome: resposta.nm_usuario, endereco: resposta.ds_endereco})
        toast.dark('Usuario Logado');
        navigate('/userPerfil');

      }catch(error) {
          toast.error(error.response.data.error);
      }
    }

    useEffect(()=>{
      if(storage('usuario-logado')){
        navigate('/userPerfil');
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

                <button className="login-button" onClick={() => logar()}>ENTRAR</button>
                
                <p className="crie-sua-conta">Não tem uma conta? <a href="">Cadastre-se</a></p>

            </div>

            <div className="right">
                <button className="botao-direita">Pagina Inicial</button>
                <div className="imagem"><img src="/assets/images/login-image.png" alt="" /></div>
            </div>
        </main>


    );

}