import './index.scss'

export default function DadoUser(props){

    return(
        <div className='dados-user'>
            <img className='image' src="/assets/images/dadoImage.png" alt="" />

            <div className='textos'>
                <span className='dado-title'>{props.NM_USUARIO}</span>
                <span className='dado-desc'>{props.DS_ENDERECO}</span>
            </div>  
        </div>
    );
}