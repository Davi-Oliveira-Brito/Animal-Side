import './index.scss'

export default function DadoUser(props){

    return(
        <div className='dados-user'>
            <img className='image' src="/assets/images/dadoImage.png" alt="" />

            <div className='textos'>
                <span className='dado-title'>{props.usuario}</span>
                <span className='dado-desc'>{props.endereco}</span>
            </div>  
        </div>
    );
}