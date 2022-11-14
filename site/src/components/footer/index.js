import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    return(
        <section className="footer">
                    <div className="sub">
                        <div className="empresa">
                            <p>empresa</p>
                            <a href="" onClick={() => navigate('/ong')}>A ong</a>
                            <a href="" onClick={() => navigate('/quemsomos')}>Quem Somos?</a>
                        </div>

                        <div className="produto">
                            <p>produto</p>
                            <a href="" onClick={() => navigate('/doar')}>Doe</a>
                            <a href="" onClick={() => navigate('/feedadocao')}>Adotar</a>
                        </div>
                    </div>
    </section>
    );
} 