import './index.scss'

export default function CardValor(props){
    return(
        <main className="card">
            <img src={props.image} alt="" />

            <p className="titulo">{props.titulo}</p>

            <p className="desc">{props.desc}</p>
        </main>
    );
}