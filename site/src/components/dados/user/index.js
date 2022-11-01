import './index.scss'

export default function DadoUser(props){

    return(
        <div className='dados-user'>
            <img className='image' src="/assets/images/dadoImage.png" alt="" />

            <div className='textos'>
                <p className='dado-title'>{props.nome}</p>
                <p className='dado-desc'>{props.regiao}</p>
            </div>  
        </div>
    );
}