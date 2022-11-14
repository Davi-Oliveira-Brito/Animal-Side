import React from 'react';
import { useState } from 'react';
import './index.scss'

import { pegarImagem } from '../../api/admin/animalAPI';
import AnimalPopUp from '../animalInfoPopUp';

export default function CardFeed(props) {
    const [isOpen, setIsOpen] = useState('nao');

    function mostrarImagem() {
        if(typeof(props.imagem) == 'object'){
            //return URL.createObjectURL(props.imagem);
        }else{
            return pegarImagem(props.imagem)
        }
    }

    return (
        <main className="comp-card">
            <AnimalPopUp 
            id={props.id}
            imagem={props.imagem}
            nome={props.nome}
            raca={props.raca}
            porte={props.porte}
            idade={props.idade}
            preferencia={props.preferencia}
            descricao={props.descricao}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
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
                        <button onClick={() => setIsOpen('sim')} className="botao">Conhecer</button>
                        <button className="botao">Adotar</button>
                    </div>

                </div>
            </div>

        </main>
    );
}