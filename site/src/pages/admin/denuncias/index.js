import './index.scss';
import SideBarAdmin from '../../../components/sideBarAdmin';
import NavBarAdmin from '../../../components/navBarAdmin';
import DadoUser from '../../../components/dados';
import CardDenuncia from '../../../components/cardDenucia';


export default function denucias(){
    return(
        <main className='page-denuncia'>
            <SideBarAdmin/>
            <div className='right-page'>
                <NavBarAdmin/>
                <div className='dados'>
                <DadoUser/>
                </div>
                <h1 className='titulo'>Posts denuncias</h1>
                <CardDenuncia/>
            </div>
        </main>
    );
}