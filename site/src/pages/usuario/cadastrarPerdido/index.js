import './index.scss'

// Componentes
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import NavBarAdmin from '../../../components/navBarAdmin/index.js'

// Hooks
import { useState, useEffect } from 'react';
import { isRouteErrorResponse, useFetcher, useNavigate, useSearchParams } from 'react-router-dom';
import storage from 'local-storage';

// Api
import { buscaAnimalPerdidoId, cadastroAnimalPerdido, enviarImagem, pegarImagem } from '../../../api/usuario/usuarioAPI.js'; 
import { buscaFiltro } from '../../../api/animalAPI';
import { toast } from 'react-toastify';

export default function CadastrarAnimalPerdido(){
    // Porte, Raca, Sexo são ID's
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState();
    const [idAnimal, setIdAnimal] = useSearchParams('id');
    const [animal, setAnimal] = useEffect({
        nome:           '',
        idade:           0,
        porte:           0,
        raca:            0,
        sexo:            0,
        tipo:            0,
        dia:            '',
        telefone:       '',
        descricao:      '',
    });
    const [selects, setSelects] = useState({porte: [], raca: [], sexo: [], tipo: []})
    async function carregarSelects() {
        let filtros = await buscaFiltro();
        setSelects(filtros);
    }

    async function novo() {
        setAnimal({
            nome:        '',
            idade:        0,
            porte:        0,
            raca:         0,
            sexo:         0,
            tipo:         0,
            dia:         '',
            telefone:    '',
            descricao:   '',
        })
        navigate('/cadastroperdido');
    }

    async function carregarAnimal() {
        try{
            let r = await buscaAnimalId(idAnimal.get('id'));
            setAnimal(r);
            
        }catch(error) {
            toast.dark(error.response.data.error);
        }
    }

    async function cadastrar() {
        try{
            if(animal.image){
                if(!idAdmin.get('id') || idAnimal.get('id') === null){
                    const { insertedId } = await cadastroAnimalPerdido(animal, admin);
                    
                }
            }
        }
    }

    return(
        <main className='animal-perdido-main'>

        </main>
    );
}