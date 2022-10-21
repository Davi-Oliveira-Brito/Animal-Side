import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function SidebarUser() {
    const navigate = useNavigate();
    return (
        <main className='comp-side-user'>
            <div className='side-sub'>
                <img className="logo" src="/assets/images/logoRow.png" alt="" />


                <p className='titulo'>Perfil do usuário</p>

                <div className='items-area'>
                    <div onClick={() => navigate('/')} className="element-info" >

                        <img className="comp-image" src="/assets/images/Userperfil.png" alt="" />
                        <button className="element-button">Perfil</button>

                    </div>

                    <div onClick={() => navigate('/feedAdocaoAdmin')} className="element-info" >

                        <img className="comp-image" src="/assets/images/Mais.png" alt="" />
                        <button className="element-button">posts</button>

                    </div>

                    <div className="element-info" >

                        <img className="comp-image" src="/assets/images/balao.png" alt="" />
                        <button className="element-button">comentarios</button>

                    </div>

                    <div onClick={() => navigate('/cadastro')} className="element-info" >

                        <img className="comp-image" src="/assets/images/Prancheta.png" alt="" />
                        <button className="element-button">Feedback</button>

                    </div>

                    <div className="element-info" >

                        <img className="comp-image" src="/assets/images/cadastrar.png" alt="" />
                        <button className="element-button">Cadastrar</button>


                    </div>

                    <div className="element-info" >

                        <img className="comp-image" src="/assets/images/interesses.png" alt="" />
                        <button className="element-button" >Meus Interesses</button>

                    </div>


                </div>

                <div className='logout'>
                    <img src="/assets/images/Logout.png" alt="" />
                    <button className='sair'>sair</button>
                </div>

            </div>
        </main>

    );
}