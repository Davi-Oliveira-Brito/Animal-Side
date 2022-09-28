import './index.scss'

export default function Navbar(){

    return(
        <main className='nav-feed'>
            <section className="sub-feed" >
                <div className='nav-image' >
                    <img className='logo-feed' src="/assets/images/Logorow.png" alt="" />
                </div>

                <div className='element-nav-mom'>
                    <a className='element-nav-feed' href="">A ONG</a>
                    <a className='element-nav-feed' href="">Quem Somos?</a>
                    <a className='element-nav-feed' href="">Ajude</a>
                    <a className='element-nav-feed' href="">Feira</a>
                    <a className='element-nav-feed' href="">Adote</a>
                    <a className='element-nav-feed' href="">Doe</a>
                    <a className='element-nav-feed' href="">Login</a>
                </div>
            </section>
        </main>
    )

}