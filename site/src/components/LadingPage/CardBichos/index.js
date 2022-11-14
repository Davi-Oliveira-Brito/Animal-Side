import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function CardBicho(props) {
    const navigate = useNavigate();
    return (
        <main className="cardBicho">
            <div className="img-area">
                <img src={props.image} alt="" />
            </div>
            <div className={props.cor}>
                <p className="nome">{props.nome}</p>
                
                <p className="desc">{props.desc}</p>

                <button className="botao" onClick={() => navigate('/feedadocao')}>Conhecer</button>
            </div>
        </main>
    );
}