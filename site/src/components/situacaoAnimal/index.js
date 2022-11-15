import React from 'react'
import './index.scss';

export default function SituacaoAnimal(props) {
    return (
        <div className={`situacao-animal ${props.isOpen}`}>
            <div className='container'>
                <div className='titulo'>Pessoas querendo adotar esse bichinho</div>
                <div className='status-container'>
                    <div className='info-user'>
                        <div className='first-row'>
                            <div className='letra'><span>L</span></div>
                            <div className='names'>
                                <div className='column'>
                                    <div>
                                        <span>Raça</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Idade</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Sexo</span><span>item</span>
                                    </div>

                                </div>
                                
                                <div className='column'>
                                    <div>
                                        <span>Raça</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Idade</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Sexo</span><span>item</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='descricao'>asdasdasdkjkahsudhasuhd iuashd huashud asud</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
