import './index.scss'


export default function SideBarAdmin() {
    return (
        <main className="comp-sideBar">

            <div className="logo">
                <img src="/assets/images/logoRow.png" alt="" />
            </div>

            <div className="title">
                <p>Administrador</p>
            </div>

            <div className="info-container">

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Userperfil.png" alt="" />
                    <button className="element-button">Perfil</button>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Prancheta.png" alt="" />
                    <button className="element-button">Feed Adoção</button>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/mais.png" alt="" />
                    <button className="element-button">Posts</button>

                </div>

                <div className="element-info" >
                    
                    <img className="comp-image" src="/assets/images/Download.png" alt="" />
                    <button className="element-button">Cadastrar</button>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/denuncias.png" alt="" />
                    <button className="element-button">Denuncias</button>


                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Calendario.png" alt="" />
                    <button className="element-button" >Eventos</button>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/dados.png" alt="" />
                    <button className="element-button" >Dados</button>

                </div>

            </div>

            
                <button className="sair-button" > <img className="comp-image" src="/assets/images/Logout.png" alt="" /></button>
               

            


        </main>
    );
}