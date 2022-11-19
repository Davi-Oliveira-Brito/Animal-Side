import React from 'react';
import './index.scss'

import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function SideBarAdmin() {
    const navigate = useNavigate();
    function sair() {
        storage.remove('admin-logado');
        navigate('/loginAdmin');
    }
    return (
        <main className="comp-sideBar">

            <div className="logo">
                <img src="/assets/images/logoRow.png" alt="" />
            </div>

            <div className="title">
                <p>Administrador</p>
            </div>

            <div className="info-container">

                <div onClick={()=>navigate('/adminPerfil')} className="element-info" >

                    <img className="comp-image" src="/assets/images/Userperfil.png" alt="" />
                    <button className="element-button">Perfil</button>

                </div>

                <div onClick={()=>navigate('/feedAdocaoAdmin')} className="element-info" >

                    <img className="comp-image" src="/assets/images/Prancheta.png" alt="" />
                    <button className="element-button">Feed Adoção</button>

                </div>

                <div onClick={()=>navigate('/post')}  className="element-info" >

                    <img className="comp-image" src="/assets/images/mais.png" alt="" />
                    <button className="element-button">Posts</button>

                </div>

                <div onClick={()=>navigate('/cadastro')} className="element-info" >
                    
                    <img className="comp-image" src="/assets/images/Download.png" alt="" />
                    <button className="element-button">Cadastrar</button>

                </div>

            </div>

            
                <button onClick={() => sair()} className="sair-button" > <img className="comp-image" src="/assets/images/Logout.png" alt="" /></button>
               
        </main>
    );
}