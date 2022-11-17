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
                                        <span>Nome</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Fone</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Email</span><span>item</span>
                                    </div>

                                </div>
                                
                                <div className='column'>
                                    <div>
                                        <span>Renda</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Possui Animal:</span><span>item</span>
                                    </div>
                                    <div>
                                        <span>Tipo de casa</span><span>item</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='descricao'>asdasdasdkjkahsudhasuhd iuashd huashud asud</div>

                        <textarea></textarea>

                        <div className='btn'>
                            <span>Enviar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
