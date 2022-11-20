import React, { useState } from 'react'

import './index.scss';

import { toast } from 'react-toastify'
import { cadastrarUsuario } from '../../../api/usuario/usuarioAPI.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function CriarConta() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function cadastrarNovoUsuario() {
        try {
            const insertedId = await cadastrarUsuario({
                nome: nome,
                telefone: telefone,
                email: email,
                senha: senha
            });
            storage('usuario-logado', {
                id: insertedId.id ? insertedId.id : null, 
                nome: nome ? nome : null,
                data: insertedId.DT_NASCIMENTO ? insertedId.DT_NASCIMENTO : null,
                endereco: insertedId.DS_ENDERECO ? insertedId.DS_ENDERECO : null,
                telefone: telefone ? telefone : null,
                renda: insertedId.VL_RENDA ? insertedId.VL_RENDA : null,
                pessoasCasa: insertedId.QTD_PESSOAS_CASA ? insertedId.QTD_PESSOAS_CASA : null,
                animaisCasa: insertedId.BT_ANIMAIS_CASA ? insertedId.BT_ANIMAIS_CASA : null,
                tempoSozinho: insertedId.TM_TEMPO_SOZINHO_ANIMAL ? insertedId.TM_TEMPO_SOZINHO_ANIMAL : null,
                email: email ? email : null,
                tipoResidencia: insertedId.TP_RESIDENCIA ? insertedId.TP_RESIDENCIA : null
              })
            toast.dark('🐶 Bem vindo(a) ao Animal Side', {autoClose: 1500});
            setTimeout(()=>{
                navigate('/userPerfil');
            },1500);
        } catch (error) {
            console.log(error);
            toast.dark('❗ ' + error.response.data.error);
        }
    }
    return (
        <main className="user-cadastro-main">
            <div className="admin-left">
                <button onClick={() => navigate('/')} className="botao-direita">Pagina Inicial</button>
                <div className="imagem"><img src="/assets/images/CriaConta3.png" alt="" /></div>
            </div>

            <div className="admin-right">
                <h1 className="admin-login-title">CADASTRE-SE</h1>

                <p className="admin-login-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

                <div className="admin-inputs">
                    <input className="email" type="text" placeholder="Nome do usuario" value={nome} onChange={e => setNome(e.target.value)} />
                    <input className="email" type="text" placeholder="Numero pra contato" value={telefone} onChange={e => setTelefone(e.target.value)} />
                    <input className="email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button onClick={()=>cadastrarNovoUsuario()} className="admin-login-button">Cadastrar</button>

                <p className="admin-crie-sua-conta">Use dados verdadeiros, esta é uma instituição séria!</p>
            </div>
        </main>
    )
}