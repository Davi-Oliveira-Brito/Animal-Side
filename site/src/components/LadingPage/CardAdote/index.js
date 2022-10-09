import './index.scss'


export default function CardAdote(props) {
    return(
        <main className={props.classe}>
            <div className="texts">
               <div className="subtext">
                    <p className="name">{props.nome}</p>
                    <p className="desc">{props.desc}</p>
                    <button className="button-adotar">Adotar</button>
               </div>
            </div>
                <img className="image" src={props.image} alt="" />
        </main>
    );
}