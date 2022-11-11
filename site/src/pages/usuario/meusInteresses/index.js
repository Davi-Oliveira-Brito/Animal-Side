import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import NavBarAdmin from '../../../components/navBarAdmin';
import DadoUser from '../../../components/dados';

export default function MeusInteresses() {
    return (
        <main className='meus-interesses-page'>
            <SidebarUser />
            <div className='right'>
                <div><NavBarAdmin /></div>
                <div>
                    <DadoUser nome="Rosana Soares" regiao="São Paulo, zona sul" />
                </div>
                <div className='card-meus-interesses'>
                    <div>
                        <img src="assets/images/DogBranco.png" alt="" />
                    </div>
                    <div className='card-right'>
                        <h1>Spike</h1>
                        <div>Raça: Husky  Porte: G  Idade: 2 anos  Pref: Casa</div>
                        <p>Quero adotar o Spike, pois estou a procura de um companheiro dócil e que queira brincar no espaço grande que temos em nosso quintal.</p>
                    </div>
                </div>
            </div>
        </main>
    );

}