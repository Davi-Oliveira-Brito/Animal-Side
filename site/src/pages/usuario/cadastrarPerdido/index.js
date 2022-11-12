import './index.scss'

// Componentes
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import NavBarAdmin from '../../../components/navBarAdmin/index.js'

// Hooks
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import storage from 'local-storage';

// Api
import { buscarAnimalPerdidoId, cadastroAnimalPerdido, enviarImagem, pegarImagem } from '../../../api/usuario/usuarioAPI.js';
import { buscaFiltro } from '../../../api/animalAPI';
import { toast } from 'react-toastify';
import { alterarAnimal } from '../../../api/admin/animalAPI';
import DadoUser from '../../../components/dados';

export default function UserCadastrarPerdido() {
    // Porte, Raca, Sexo são ID's
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState();
    const [idAnimal, setIdAnimal] = useSearchParams('id');
    const [animal, setAnimal] = useEffect({
        nome: '',
        idade: 0,
        porte: 0,
        raca: 0,
        sexo: 0,
        tipo: 0,
        dia: '',
        telefone: '',
        descricao: '',
    });
    const [selects, setSelects] = useState({ porte: [], raca: [], sexo: [], tipo: [] })
    async function carregarSelects() {
        let filtros = await buscaFiltro();
        setSelects(filtros);
    }

    async function novo() {
        setAnimal({
            nome: '',
            idade: 0,
            porte: 0,
            raca: 0,
            sexo: 0,
            tipo: 0,
            dia: '',
            telefone: '',
            descricao: '',
        })
        navigate('/cadastroperdido');
    }

    async function carregarAnimal() {
        try {
            let r = await buscarAnimalPerdidoId(idAnimal.get('id'));
            setAnimal(r);

        } catch (error) {
            toast.dark(error.response.data.error);
        }
    }

    async function cadastrar() {
        try {
            if (animal.image) {
                if (idAnimal.get('id') === null) {
                    const { insertedId } = await cadastroAnimalPerdido(animal, usuario);
                    enviarImagem(animal.imagem, insertedId);
                    toast.dark('animal inserido', { autoClose: 1500 });
                    navigate(`/cadastro?id=${insertedId}`)
                } else {
                    await alterarAnimal(animal, idAnimal.get('id'),usuario)
                    enviarImagem(animal.imagem, idAnimal.get('id'));
                    toast.dark('animal alterado', { autoClose: 1500 });
                }
            } else {
                toast.dark('Envie uma imagem')
            }
        } catch (error) {
            toast.dark(error.response.data.error, { autoClose: 1500 });
        }
    }

    function mostrarImagem() {
        if (typeof (animal.imagem) == 'object') {
            return URL.createObjectURL(animal.imagem);
        } else {
            return pegarImagem(animal.imagem)
        }
    }

    function mudarImagem() {
        document.getElementById('input-image').click();
    }

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/loginUsuario');
        } else {
            setUsuario(storage('usuario-logado').id);
        }
        if (idAnimal || idAnimal !== null) carregarAnimal();
        carregarSelects();
    });
    return (
        <main className='animal-perdido-main'>

            <div className="left">
                <SideBarAdmin />
            </div>

            <div className="right">
                <div className="nav">
                    <NavBarAdmin id="navbar" />
                </div>

                <div className="conteudo-cadastro">
                    <DadoUser
                        nome="Usuário"
                        regiao="São Paulo, zona sul" />

                    <div className="medio">
                        <p>Cadastre seu bichinho e tenha ajuda para encontrá-lo</p>
                    </div>

                    <div className="quadrado">
                        <div className="baixo">
                            <div className="dados">
                                <div className="inputs-dados">
                                    <input value={animal.nome} onChange={(e) => setAnimal({ ...animal, nome: e.target.value })} className="inputo" type="text" placeholder="Nome" />

                                    <select value={animal.tipo} onChange={(e) => setAnimal({ ...animal, tipo: Number(e.target.value) })} className="inputo" >
                                        <option value={0} disable selected hidden>Raça</option>
                                        {selects.tipo.map(item => {
                                            return (
                                                <option key={item.id_tipo} value={item.id_tipo}>{item.tipo}</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.sexo} onChange={(e) => setAnimal({ ...animal, sexo: Number(e.target.value) })} className="inputo">
                                        <option value={0} disable selected hidden>Sexo</option>
                                        {selects.sexo.map(item => {
                                            return (
                                                <option key={item.id_sexo} value={item.id_sexo} >{item.sexo}</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.porte} onChange={(e) => setAnimal({ ...animal, porte: Number(e.target.value) })} className="inputo">
                                        <option value={0} disable selected hidden>Porte</option>
                                        {selects.porte.map(item => {
                                            return (
                                                <option key={item.id_porte} value={item.id_porte}>{item.porte}</option>
                                            );
                                        })}
                                    </select>

                                    <select value={animal.raca} onChange={(e) => setAnimal({ ...animal, raca: Number(e.target.value) })} className="inputo" >
                                        <option value={0} disable selected hidden>Raça</option>
                                        {selects.raca.map(item => {
                                            return (
                                                <option key={item.id_raca} value={item.id_raca}>{item.raca}</option>
                                            );
                                        })}
                                    </select>

                                    <input value={animal.idade} onChange={(e) => setAnimal({ ...animal, idade: Number(e.target.value) })} className="inputo" type="text" placeholder="Idade" />

                                    <input value={animal.dia} onChange={(e) => setAnimal({ ...animal, dia: e.target.value })} className="inputo" type="text" placeholder="Dia do sumiço" />

                                    <input value={animal.telefone} onChange={(e) => setAnimal({ ...animal, telefone: e.target.value })} className="inputo" type="text" placeholder="Telefone de Contato" />
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

                            <div className="final">
                                <textarea onChange={(e) => setAnimal({ ...animal, descricao: e.target.value })} className="desc" value={animal.descricao} placeholder="Descrição" />
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
            </div>
        </main>
    );
}