import './index.scss'

// Componentes
import SideBar from '../../../components/sideBar/index.js'
import NavBar from '../../../components/navBar/index.js'

// Hooks
import { useState, useEffect } from 'react';

// Api
import { buscarRacas, buscarPreferencia, buscarPorte, cadastrarAnimal, enviarImagem } from '../../../api/baseApi.js.js'; 

export default function PageCadastrar() {
    
    const [nome,setNome] = useState('');
    const [idade,setIdade] = useState();
    const [sexo,setSexo] = useState('');
    const [descricao,setDescricao] = useState('');

    const [idRaca,setIdRaca] = useState();
    const [racas, setRacas] = useState([]);

    const [idPorte,setIdPorte] = useState();
    const [porte, setPorte] = useState([]);

    const [idPreferencia,setIdPreferencia] = useState();
    const [preferencia, setPreferencia] = useState([]);

    async function carregarSelects() {
        let r = await buscarRacas();
        setRacas(r);
    }

    useEffect(() => {
        carregarSelects();
    },[]);

    return (
        <main className="cadastro-page">

            <div className="left">
                <SideBar />
            </div>

            <div className="right">
                <div className="nav">
                    <NavBar />
                </div>

                <div className="conteudo-cadastro">

                    <div className="superior">
                        <img src="/assets/images/admin.png" alt="Imagem nâo encontrada" />
                        <div className="infos-admin">
                            <b className="bold">Administrador</b>
                            <p>São Paulo, Zona Sul</p>
                        </div>
                    </div>

                    <div className="medio">
                        <p>Cadastre para adoção</p>
                    </div>
                    <div className="quadrado">
                        <div className="baixo">
                            <div className="dados">
                                <div className="inputs-dados">
                                    <input className="inputo" type="text" placeholder="Nome" />
                                    <input className="inputo" type="text" placeholder="Idade" />

                                    <select className="inputo" >
                                        <option disable selected hidden>Raça</option>
                                        {racas.map(item => {
                                            return(
                                                <option value={ item.raca } key="">{ item.raca }</option>
                                            );
                                        })}
                                    </select>

                                    <select className="inputo">
                                        <option disable selected hidden>Porte</option>
                                    </select>

                                    <select className="inputo">
                                        <option disable selected hidden>Sexo</option>
                                    </select>

                                    <select className="inputo">
                                        <option disable selected hidden>Preferência</option>
                                    </select>
                                </div>

                                <div className="imagem">
                                    <img src="/assets/images/downCloud.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="final">
                            <input className="desc" type="text" placeholder="Descrição" />
                            <button>Salvar</button>
                        </div>


                    </div>
                </div>
            </div>

        </main >


    );
}
