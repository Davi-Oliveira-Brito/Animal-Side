import React from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import { buscaAnimalPerdidoPorFiltro, buscaFiltro } from '../../api/animalAPI';

export default function SideBarPerdidos({ setAnimais, nome }) {
    const [selects, setSelects] = useState({raca: [], porte: [], sexo: [], preferencia: []});
    const [idRaca, setIdRaca] = useState();
    const [idPorte, setIdPorte] = useState();
    const [idSexo, setIdSexo] = useState();
    const [idPreferencia, setIdPreferecia] = useState();
    const [maior, setMaior] = useState();
    const [menor, setMenor] = useState();

    async function carregarFiltros() {
        let filtro = await buscaFiltro();
        setSelects(filtro);
    }

    async function buscaAnimalFiltrado () {
        let r = await buscaAnimalPerdidoPorFiltro(nome, idSexo, idPorte, idRaca, idPreferencia, menor, maior);
        setAnimais(r)
    }
    
    function verificarCheckBox(e, id) {
        if(e.target.checked) return id
        else return 'undefined';
    }

    useEffect(()=>{
        carregarFiltros()
    },[]);

    useEffect(()=>{
        buscaAnimalFiltrado()
    },[idPorte, idRaca, idSexo, nome, idPreferencia, menor, maior])
    return (
        <main className="side-feed-perdido" >
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
                                <input onChange={(e)=> setIdPorte(verificarCheckBox(e, item.id_porte))} type="checkbox" />
                                <p className="side-text">{ item.porte }</p>
                            </div>
                        )  
                    })}
                </div>

                <div className="idade">
                    <p className="side-title">Idade</p>
                    <div className="check-side">
                        <input onChange={(e)=> setMenor(verificarCheckBox(e, 10))} type="checkbox" placeholder />
                        <p className="side-text">Menor que 10 anos</p>
                    </div>
                    
                    <div className="check-side">
                        <input onChange={(e)=> setMaior(verificarCheckBox(e, 10))} type="checkbox" placeholder />
                        <p className="side-text">Maior que 10 anos</p>
                    </div>
                </div>
                
                <div className="idade">
                    <p className="side-title">Preferencia</p>
                    {selects.preferencia.map(item => {
                        return(
                            <div className="check-side">
                                <input onChange={(e)=> setIdPreferecia(verificarCheckBox(e, item.id_preferencia))} type="checkbox" placeholder />
                                <p className="side-text">{item.preferencia}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}