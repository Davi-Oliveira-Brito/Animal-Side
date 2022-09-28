import './index.scss'

// Componentes
import SideBar from '../../../components/sideBar/index.js'
import NavBar from '../../../components/navBar/index.js'

// Hooks
import { useState, useEffect } from 'react';
import storage from 'local-storage';

// Api
import { buscarRacas, buscarPreferencia, buscarPorte, cadastrarAnimal, enviarImagem, pegarImagem } from '../../../api/cadastraAnimal.js'; 
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

    async function carregarSelects() {
        let ra = await buscarRacas();
        let po = await buscarPorte();
        let pr = await buscarPreferencia();
        setRacas(ra);
        setPorte(po);
        setPreferencia(pr);
    }

    async function cadastrar(){
        try{
            //const admin = storage('usuario-logado').id;    
            let { insertedId } = await cadastrarAnimal(nome, idade, sexo, descricao, idPorte, idRaca, idPreferencia);
            enviarImagem(imagem, insertedId);
            toast.dark('animal inserido');
        }
        catch(error){
           toast.dark(error.response.data.erro);
        }
    }

    function mostrarImagem() {
        if(typeof(imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }else{
            return pegarImagem(imagem)
        }
    }

    function mudarImagem() {
       document.getElementById('input-image').click(); 
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
                    <NavBar id="navbar" />
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

                                    <select onChange={(e) => setIdRaca(Number(e.target.value))} className="inputo" >
                                        <option disable selected hidden>Raça</option>
                                        {racas.map(item => {
                                            return(
                                                <option value={ item.id_raca } key="">{ item.ds_raca }</option>
                                            );
                                        })}
                                    </select>

                                    <select onChange={(e) => setIdPorte(Number(e.target.value))} className="inputo">
                                        <option disable selected hidden>Porte</option>
                                        {porte.map(item => {
                                            return(
                                                <option value={ item.id_porte } key="">{ item.ds_porte }</option>
                                            );
                                        })}
                                    </select>

                                    <select onChange={(e)=> setSexo(e.target.value)} className="inputo">
                                        <option disable selected hidden>Sexo</option>
                                        <option>Macho</option>
                                        <option>Femea</option>
                                    </select>

                                    <select  onChange={(e) => setIdPreferencia(Number(e.target.value))} className="inputo">
                                        <option disable selected hidden>Preferência</option>
                                        {preferencia.map(item => {
                                            return(
                                                <option value={ item.id_preferencia } key="">{ item.ds_preferencia }</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div onClick={() => mudarImagem()} className="imagem">
                                    {!imagem &&
                                        <img className='cloud' src="/assets/images/imageDownload.png" alt="" />
                                    }
                                    {imagem &&
                                        <img src={mostrarImagem()} alt="" />
                                    }
                                    <input id='input-image' type='file' onChange={(e) => setImagem(e.target.files[0])}/>
                                </div>
                            </div>
                        </div>
                        <div className="final">
                            <textarea  onChange={(e)=>setDescricao(e.target.value)}  className="desc"  placeholder="Descrição" />
                            <button onClick={() => cadastrar()}>Salvar</button>
                        </div>


                    </div>
                </div>
            </div>

        </main >


    );
}
