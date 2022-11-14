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
        storage('usuario-logado', {
                                  id: resposta.ID_USUARIO ? resposta.ID_USUARIO : null, 
                                  nome: resposta.NM_USUARIO ? resposta.NM_USUARIO : null,
                                  data: resposta.DT_NASCIMENTO ? resposta.DT_NASCIMENTO : null,
                                  endereco: resposta.DS_ENDERECO ? resposta.DS_ENDERECO : null,
                                  telefone: resposta.DS_TELEFONE ? resposta.DS_TELEFONE : null,
                                  renda: resposta.VL_RENDA ? resposta.VL_RENDA : null,
                                  pessoasCasa: resposta.QTD_PESSOAS_CASA ? resposta.QTD_PESSOAS_CASA : null,
                                  animaisCasa: resposta.BT_ANIMAIS_CASA ? resposta.BT_ANIMAIS_CASA : null,
                                  tempoSozinho: resposta.TM_TEMPO_SOZINHO_ANIMAL ? resposta.TM_TEMPO_SOZINHO_ANIMAL : null,
                                  email: resposta.DS_EMAIL ? resposta.DS_EMAIL : null,
                                  tipoResidencia: resposta.TP_RESIDENCIA ? resposta.TP_RESIDENCIA : null
                                })
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
                
                <p onClick={()=> navigate('/cadastro/usuario')} className="crie-sua-conta">Não tem uma conta? <a href="">Cadastre-se</a></p>

            </div>

            <div className="right">
                <button className="botao-direita">Pagina Inicial</button>
                <div className="imagem"><img src="/assets/images/login-image.png" alt="" /></div>
            </div>
        </main>


    );

}