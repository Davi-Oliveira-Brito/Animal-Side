import React from 'react';
import './index.scss'

import { pegarImagem } from '../../api/admin/animalAPI';

export default function CardFeed(props) {
    
    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }

    return (
        <main className="card">
            <div className="left-area">
                <img src={mostrarImagem()} alt="" />
            </div>

            <div className="right-area">
                
                <div className="text-area">
                    <h1 className="card-title">{props.nome}</h1>
                    <b className="card-raca">Raça: {props.raca}</b>
                    <p className="card-desc">Descrição: {props.descricao}</p>
                    <p className="card-idade">Idade: {props.idade}</p>
                </div>

                <div className="buttons-area">

                    <div className="buttons">
                        <button className="botao">Conhecer</button>
                        <button className="botao">Adotar</button>
                    </div>

                </div>
            </div>

        </main>
    );
}