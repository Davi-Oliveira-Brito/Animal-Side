import React from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import { buscaFiltro } from '../../api/animalAPI';

export default function SideBar({ setAnimais, nome }) {
    const [selects, setSelects] = useState();
    const [idPorte, setIdPorte] = useState();
    const [idSexo, setIdSexo] = useState();
    const [idPreferencia, setIdPreferecia] = useState();

    async function carregarFiltros() {
        let filtro = await buscaFiltro();
        setSelects(filtro);
    }
    
    function verificarCheckBox(e, id) {
        if(e.target.checked) return id
        else return '';
    }

    useEffect(()=>{
        carregarFiltros()
    },[]);
    return (
        <main className="side-feed" >
            <section className="side-sub-feed">
                <div className="animais">
                    <p className="side-title">Animais</p>
                    <p className="side-text">Cachorros</p>
                    <p className="side-text">Gatos</p>
                    <p className="side-text">Pássaros</p>
                    <p className="side-text">Porquinho da Índia</p>
                </div>

                <div className="sexo">
                    <p className="side-title">Sexo</p>
                    {selects.sexo.map(item => {
                        return(
                            <div className="check-side">
                                <input onChange={(e)=> setIdSexo(verificarCheckBox(e, item.id_sexo))} type="checkbox" placeholder />
                                <p className="side-text">{ item.sexo }</p>
                            </div>
                        )  
                    })}
                </div>

                <div className="porte">
                    <p className="side-title">Porte</p>
                    {selects.porte.map(item => {
                        return(
                            <div className="check-side">
                                <input onChange={(e)=> setIdSexo(verificarCheckBox(e, item.id_porte))} type="checkbox" />
                                <p className="side-text">{ item.porte }</p>
                            </div>
                        )  
                    })}
                </div>

                <div className="idade">
                    <p className="side-title">Idade</p>
                    <div className="check-side">
                        <input type="checkbox" placeholder />
                        <p className="side-text">15</p>
                    </div>
                    
                    <div className="check-side">
                        <input type="checkbox" placeholder />
                        <p className="side-text">15</p>
                    </div>
                </div>
            </section>
        </main>
    )
}