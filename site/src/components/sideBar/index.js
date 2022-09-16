import './index.scss'


export default function SideBar(props) {
    return (
        <main className="comp-sideBar">

            <div className="logo">
                <img src="/assets/images/logoRow.png" alt="" />
            </div>

            <div className="title">
                <h3>perfil do Administrador</h3>
            </div>

            <div className="Info-Container">

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Userperfil.png" alt="" />
                    <p>Perfil</p>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Prancheta.png" alt="" />
                    <p>Feed Adoção</p>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/mais.png" alt="" />
                    <p>Posts</p>

                </div>

                <div className="element-info" >
                    
                    <img className="comp-image" src="/assets/images/Download.png" alt="" />
                    <p>Cadastrar</p>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/denuncias.png" alt="" />
                    <p>Denuncias</p>


                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/Calendario.png" alt="" />
                    <p>Eventos</p>

                </div>

                <div className="element-info" >

                    <img className="comp-image" src="/assets/images/dados.png" alt="" />
                    <p>Dados</p>

                </div>

            </div>

            <div className="sair">
                
                <img className="comp-image" src="/assets/images/Logout.png" alt="" />

            </div>


        </main>
    );
}