import React from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import { buscarSexo, buscarTipo, buscarRacas, buscarPreferencia, buscarPorte} from '../../api/cadastraAnimal.js';
import { filtroAnimal } from '../../api/feed';

export default function SideBar({ setAnimais, nome }) {
    const [sexo, setSexo] = useState([]);
    const [idSexo, setIdSexo] = useState(''); 

    const [tipo, setTipo] = useState([]);
    const [idTipo, setIdTipo] = useState('');

    const [racas, setRacas] = useState([]);
    const [idRaca, setIdRaca] = useState('');
    
    const [porte, setPorte] = useState([]);
    const [idPorte, setIdPorte] = useState('');
    
    const [preferencia, setPreferencia] = useState([]);
    const [idPreferencia, setIdPreferencia] = useState('');
    
    async function carregarFiltros() {
        let ra = await buscarRacas();
        let po = await buscarPorte();
        let pr = await buscarPreferencia();
        let sx = await buscarSexo();
        let tp = await buscarTipo();

        setSexo(sx);
        setTipo(tp);
        setRacas(ra);
        setPorte(po);
        setPreferencia(pr);
    }

    async function carregarAnimaisFiltrados() {
        let r = await filtroAnimal(nome, idTipo, idSexo, idPorte, '', '');
        setAnimais(r);
    }

    function mudarIdSexo(e, id) {
        if(e.target.checked) setIdSexo(id)
        else setIdSexo('')
    }
    function mudarIdTipo(e, id) {
        if(e.target.checked) setIdTipo(id)
        else setIdTipo('')
    }

    
    function mudarIdRaca(e, id) {
        if(e.target.checked) setIdRaca(id)
        else setIdRaca('')
    }
    
    function mudarIdPorte(e, id) {
        if(e.target.checked) setIdPorte(id)
        else setIdPorte('')
    }
    
    function mudarIdPreferencia(e, id) {
        if(e.target.checked) setIdPreferencia(id)
        else setIdPreferencia(undefined)
    }

    

    useEffect(()=>{
        carregarFiltros()
    },[]);

    useEffect(()=>{
        carregarAnimaisFiltrados()
    },[nome, idSexo, idTipo, idRaca, idPorte, idPreferencia ]);
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
                    {sexo.map(item => {
                        return(
                            <div className="check-side">
                                <input onChange={(e)=>mudarIdSexo(e, item.id_sexo)} type="checkbox" placeholder />
                                <p className="side-text">{ item.ds_sexo }</p>
                            </div>
                        )  
                    })}
                </div>

                <div className="porte">
                    <p className="side-title">Porte</p>
                    {porte.map(item => {
                        return(
                            <div className="check-side">
                                <input onChange={(e) => mudarIdPorte(e, item.id_porte)} type="checkbox" />
                                <p className="side-text">{ item.ds_porte }</p>
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