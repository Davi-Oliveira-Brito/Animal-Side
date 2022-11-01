import './index.scss'

// Componentes
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import NavBarAdmin from '../../../components/navBarAdmin/index.js'
import DadoUser from '../../../components/dados/user/index.js';

// Hooks
import { useState, useEffect } from 'react';
import { isRouteErrorResponse, useFetcher, useNavigate, useSearchParams } from 'react-router-dom';
import storage from 'local-storage';

// Api
import { alterarAnimal, buscaAnimalId, cadastroAnimal, enviarImagem, pegarImagem } from '../../../api/admin/animalAPI.js'; 
import { buscaFiltro } from '../../../api/animalAPI';
import { toast } from 'react-toastify';

export default function PageCadastrar() {
    // Porte, Raca, Sexo, Preferencia são ID's 
    const navigate = useNavigate();
    const [admin, setAdmin] = useState();
    const [idAnimal, setIdAnimal] = useSearchParams('id');  
    const [animal, setAnimal] = useState({
        nome:       '',
        idade:      0,
        imagem:     '',
        descricao:  '',
        porte:      0,
        porte:      0,
        raca:       0,
        preferencia:0,
        sexo:       0,
    });
    const [selects, setSelects] = useState({raca: [], porte: [], sexo: [], preferencia: []})
    async function carregarSelects() {
        let filtros = await buscaFiltro();
        setSelects(filtros);
    }

    async function novo() {
        setAnimal({
            nome:       '',
            idade:      0,
            imagem:     '',
            descricao:  '',
            porte:      0,
            porte:      0,
            raca:       0,
            preferencia:0,
            sexo:       0,
        })
        navigate('/cadastro');
    }

    async function carregarAnimal() {
        try{
            let r = await buscaAnimalId(idAnimal.get('id'));
            setAnimal(r);
            
        }catch(error) {
            toast.dark(error.response.data.error);
        }
    }

    async function cadastrar(){
        try{
            if(animal.imagem){
                if(!idAnimal.get('id') || idAnimal.get('id') === null){
                    const { insertedId } = await cadastroAnimal(animal, admin);
                    enviarImagem(animal.imagem, insertedId);
                    toast.dark('🐶 animal inserido', {autoClose: 1500});
                    navigate(`/cadastro?id=${insertedId}`)
                }else{
                    await alterarAnimal(animal, idAnimal.get('id'),admin)
                    enviarImagem(animal.imagem, idAnimal.get('id'));
                    toast.dark('✅ animal alterado', {autoClose: 1500});
                }
            }else{
                toast.dark('❗ Envie uma imagem')
            }
        }catch(error){
            toast.dark('❗ ' + error.response.data.error, {autoClose: 1500});
        }
    }

    function mostrarImagem() {
        if(typeof(animal.imagem) == 'object'){
            return URL.createObjectURL(animal.imagem);
        }else{
            return pegarImagem(animal.imagem)
        }
    }

    function mudarImagem() {
       document.getElementById('input-image').click(); 
     }

    useEffect(() => {
        if(!storage('admin-logado')){
            navigate('/loginAdmin');
        }else{
            setAdmin(storage('admin-logado').id);
        }
        if(idAnimal || idAnimal !== null) carregarAnimal();
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
                    <DadoUser
                    nome="Administrador"
                    regiao="São Paulo, zona sul"/>

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
                                    {!animal.imagem &&
                                        <img className='cloud' src="/assets/images/imageDownload.png" alt=""/>
                                    }
                                    {animal.imagem &&
                                        <img src={mostrarImagem()} alt="" />
                                    }
                                    <input id='input-image' type='file' onChange={(e) => setAnimal({...animal, imagem: e.target.files[0]})}/>
                                </div>
                            </div>
                        </div>
                        <div className="final">
                            <textarea onChange={(e)=>setAnimal({...animal, descricao: e.target.value})} className="desc" value={animal.descricao} placeholder="Descrição" />
                            {idAnimal.get('id') &&
                                <>
                                    <button onClick={() => cadastrar()}>Alterar</button>
                                    <button onClick={() => novo()}>Novo</button>
                                </>
                            }
                            {!idAnimal.get('id') &&
                                <button onClick={() => cadastrar()}>Salvar</button>
                            }
                        </div>


                    </div>
                </div>
            </div>

        </main >


    );
}
