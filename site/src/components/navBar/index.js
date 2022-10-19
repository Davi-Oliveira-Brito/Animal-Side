import './index.scss'
import {useNavigate} from 'react-router-dom'


export default function Navbar(){

    return(
        <main className='nav-feed'>
            <section className="sub-feed" >
                <div className='nav-image' >
                    <img className='logo-feed' src="/assets/images/Logorow.png" alt="" />
                </div>
                
                <div className='element-nav-mom'>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >A ONG</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Quem Somos?</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Ajude</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Feira</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Adote</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Doe</a>
                    <a className='element-nav-feed' onCLick={useNavigate('/ong')} >Login</a>
                </div>
            </section>
        </main>
    )

}