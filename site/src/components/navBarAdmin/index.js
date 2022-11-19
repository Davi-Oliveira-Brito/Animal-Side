import { useNavigate } from 'react-router-dom';
import './index.scss'


export default function NavBarAdmin() {
    const navigate = useNavigate();
    return ( 
    <main className="nav-bar">
        <div className="nav-text">
        <a className='element-nav-feed' onClick={() => navigate('/ong')} >A ONG</a>
        <a className='element-nav-feed' onClick={() => navigate('/quemsomos')} >Quem Somos?</a>
        <a className='element-nav-feed' onClick={() => navigate('/ajude')} >Ajude</a>
        <a className='element-nav-feed' onClick={() => navigate('/feedadocao')} >Adote</a>
        <a className='element-nav-feed' onClick={() => navigate('/doar')} >Doe</a>
        <a className='element-nav-feed' onClick={() => navigate('/login')} >Login</a>

        </div>
    </main>
    );
}