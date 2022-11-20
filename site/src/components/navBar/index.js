import './index.scss'
import {useNavigate} from 'react-router-dom'


export default function Navbar(){
    const navigate = useNavigate();

    return(
        <main className='nav-feed'>
            <section className="sub-feed" >
                <div className='nav-image' >
                    <img className='logo-feed' onClick={()=>navigate('/')} src="/assets/images/Logorow.png" alt="" />
                </div>
                
                <div className='element-nav-mom'>
                    <a className='element-nav-feed' onClick={() => navigate('/')} >Home</a>
                    <a className='element-nav-feed' onClick={() => navigate('/ong')} >A ONG</a>
                    <a className='element-nav-feed' onClick={() => navigate('/quemsomos')} >Quem Somos?</a>
                    <a className='element-nav-feed' onClick={() => navigate('/ajude')} >Ajude</a>
                    <a className='element-nav-feed' onClick={() => navigate('/feedadocao')} >Adote</a>
                    <a className='element-nav-feed' onClick={() => navigate('/doar')} >Doe</a>
                    <a className='element-nav-feed' onClick={() => navigate('/login')} >Login</a>
                </div>
            </section>
        </main>
    )

}