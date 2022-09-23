import './index.scss'

// Componentes
import SideBar from '../../../components/sideBar/index.js'
import NavBar from '../../../components/navBar/index.js'

// Hooks
import { useState, useEffect } from 'react';
import storage from 'local-storage';

// Api
import { buscarRacas, buscarPreferencia, buscarPorte, cadastrarAnimal, enviarImagem } from '../../../api/cadastraAnimal.js'; 
import { toast } from 'react-toastify';

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

    const [imagem,setImagem] = useState('');

    console.log(racas);

    async function carregarSelects() {
        let ra = await buscarRacas();
        let po = await buscarPorte();
        let pr = await buscarPreferencia();
        setRacas(ra);
        setPorte(po);
        setPreferencia(pr);
    }

    async function cadastrarAnimal(){
        try{
            const admin = storage('usuario-logado').data.id;
        await cadastrarAnimal(nome, idade, sexo, descricao);
        toast.dark('animal inserido');
        }
        catch(error){
            if(error.response)
                toast.dark(error.message);
            
            else
                toast.dark(error.message);
        }
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
                                    <input onChange={(e)=>setNome(e.target.value)}className="inputo" type="text" placeholder="Nome" />
                                    <input onChange={(e)=>setIdade(e.target.value)}className="inputo" type="text" placeholder="Idade" />

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
                                        {porte.map(item => {
                                            return(
                                                <option value={ item.porte } key="">{ item.porte }</option>
                                            );
                                        })}
                                    </select>

                                    <select onChange={(e)=> setSexo(e.target.value)} className="inputo">
                                        <option disable selected hidden>Sexo</option>
                                        <option>Macho</option>
                                        <option>Femea</option>
                                    </select>

                                    <select className="inputo">
                                        <option disable selected hidden>Preferência</option>
                                        {preferencia.map(item => {
                                            return(
                                                <option value={ item.preferencia } key="">{ item.preferencia }</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="imagem">
                                    <img src="/assets/images/downCloud.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="final">
                            <input onChange={(e)=>setDescricao(e.target.value)}  className="desc" type="text" placeholder="Descrição" />
                            <button onClick={cadastrarAnimal}>Salvar</button>
                        </div>


                    </div>
                </div>
            </div>

        </main >


    );
}
