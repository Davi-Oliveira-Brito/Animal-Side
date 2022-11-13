import './index.scss'

export default function CardAnimalPerdido(props){

    return(
        <main className="animal-perdido">
            <div className='image-area'>        
                <img src="/assets/images/mike.png" alt="" />
            </div>

            <div className="text-area">
                <p className='nome'>SPIKE</p>
                <div className='dados-animal'>
                    <div className='text-left'>
                        <p><span>Raça: </span>Husky</p>
                        <p><span>Idade: </span>2 anos</p>
                        <p><span>Sexo: </span>Macho</p>
                    </div>

                    <div className='text-right'>
                        <p><span>Cor: </span>Branco</p>
                        <p><span>Porte: </span>G</p>
                    </div>
                </div>

                <p className='ver-mais'>Ver mais</p>

                <div className='interacoes'>
                    <img className='denuncia' src="/assets/images/coment.png" alt="" />
                    <img className='coment' src="/assets/images/denuncia.png" alt="" />
                </div>
            </div>
        </main>
    );

}