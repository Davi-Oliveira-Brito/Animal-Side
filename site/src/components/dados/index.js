import './index.scss'

export default function DadoUser(props){

    return(
        <div className='dados-user'>
            <img className='image' src="/assets/images/dadoImage.png" alt="" />

            <div className='textos'>
                <span className='dado-title'>{props.nome}</span>
                <span className='dado-desc'>{props.regiao}</span>
            </div>  
        </div>
    );
}