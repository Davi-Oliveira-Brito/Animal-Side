import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function CardAdote(props) {
    const navigate = useNavigate();
    return(
        <main className={props.classe}>
            <div className="texts">
               <div className="subtext">
                    <p className="name">{props.nome}</p>
                    <p className="desc">{props.desc}</p>
                    <button className="button-adotar" onClick={() => navigate('/feedadocao')}>Adotar</button>
               </div>
            </div>
                <img className="image" src={props.image} alt="" />
        </main>
    );
}