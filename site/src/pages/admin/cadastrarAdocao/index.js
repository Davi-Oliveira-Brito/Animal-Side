import './index.scss'

// Componentes
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import NavBarAdmin from '../../../components/navBarAdmin/index.js'

// Hooks
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import storage from 'local-storage';

// Api
import { buscaAnimalId, cadastroAnimal, enviarImagem, pegarImagem } from '../../../api/admin/animalAPI.js'; 
import { buscaFiltro } from '../../../api/animalAPI';
import { toast } from 'react-toastify';

export default function PageCadastrar() {
    // Porte, Raca, Sexo, Preferencia são ID's 
    const [idAnimal] = useSearchParams();
    const [animal, setAnimal] = useState({
        nome:       '',
        idade:      0,
        descricao:  '',
        porte:      0,
        admin:      0,
        porte:      0,
        raca:       0,
        preferencia:0,
        sexo:       0,
    });
    const [imagem, setImagem] = useState('');
    const [selects, setSelects] = useState({raca: [], porte: [], sexo: [], preferencia: []});
    console.log(idAnimal);

    async function carregarSelects() {
        let filtros = await buscaFiltro();
        setSelects(filtros);
    }

    async function carregarAnimal() {
        try{
            if(idAnimal){
                let r = await buscaAnimalId();
                setAnimal(r);
            }
        }catch(error) {
            toast.dark(error.response.data.error);
        }
    }

    async function cadastrar(){
        try{
            //const admin = storage('usuario-logado').id;    
            let { insertedId } = await cadastroAnimal(animal, 1);
            enviarImagem(imagem, insertedId);
            toast.dark('animal inserido');
        }
        catch(error){
           toast.dark(error.response.data.erro);
           console.log(error.response);
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
        if(idAnimal) carregarAnimal();
        carregarSelects();
    },[]);

    return (
        <main className="cadastro-page">

            <div className="left">
                <SideBarAdmin />
            </div>

            <div className="right">
                <div className="nav">
                    <NavBarAdmin id="navbar" />
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
                                    <input value={animal.nome} onChange={(e)=>setAnimal({...animal, nome: e.target.value})} className="inputo" type="text" placeholder="Nome" />
                                    <input value={animal.idade} onChange={(e)=>setAnimal({...animal, idade: Number(e.target.value)})}className="inputo" type="text" placeholder="Idade" />

                                    <select value={animal.raca} onChange={(e)=>setAnimal({...animal, raca: Number(e.target.value)})} className="inputo" >
                                        <option value={0} disable selected hidden>Raça</option>
                                        {selects.raca.map(item => {
                                            return(
                                                <option key={item.id_raca} value={ item.id_raca }>{ item.raca }</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.porte} onChange={(e)=>setAnimal({...animal, porte: Number(e.target.value)})} className="inputo">
                                        <option value={0} disable selected hidden>Porte</option>
                                        {selects.porte.map(item => {
                                            return(
                                                <option key={ item.id_porte } value={ item.id_porte }>{ item.porte }</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.sexo} onChange={(e)=>setAnimal({...animal, sexo: Number(e.target.value)})} className="inputo">
                                        <option value={0} disable selected hidden>Sexo</option>
                                        {selects.sexo.map(item => {
                                            return(
                                                <option key={item.id_sexo} value={ item.id_sexo } >{ item.sexo }</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.preferencia} onChange={(e)=>setAnimal({...animal, preferencia: Number(e.target.value)})} className="inputo">
                                        <option value={0} disable selected hidden>Preferência</option>
                                        {selects.preferencia.map(item => {
                                            return(
                                                <option  key={ item.id_preferencia } value={ item.id_preferencia } >{ item.preferencia }</option>
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
                            <textarea  onChange={(e)=>setAnimal({...animal, descricao: e.target.value})}  className="desc"  placeholder="Descrição" />
                            <button onClick={() => cadastrar()}>Salvar</button>
                        </div>


                    </div>
                </div>
            </div>

        </main >


    );
}
