import './index.scss'
import SidebarUser from '../../../components/sidebarUsuario';
import DadoUser from '../../../components/dados';
import NavBarAdmin from '../../../components/navBarAdmin';
import FeedbackComp from '../../../components/cardFeedBack/index.js';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import { MostrarFeedbacks } from '../../../api/usuario/usuarioAPI';
import { useState, useEffect } from 'react';
export default function UserFeedBack() {
    const [feedback, setFeedback] = useState([]);

    async function carregarFeedbacks() {
        try {
            const r = await MostrarFeedbacks(storage('usuario-logado').id);
            setFeedback(r.result);
        } catch (error) {
            console.log(error)
            toast.dark(error.response.data.error)
        }
    }

    useEffect(() => {
        carregarFeedbacks();
    }, []);


   return (
      <main className="feedback-page">
            <NavBarAdmin />
            <SidebarUser />
            <div className="coment-right">
                <div className='dado'>
                    <DadoUser
                        nome={storage('usuario-logado').nome}
                        regiao={storage('usuario-logado').endereco} />
                </div>

                <div className='comp'>
                    {feedback.map(item => {
                        return (
                            <FeedbackComp
                                id={item.id_feedback}
                                nm_animal={item.nm_animal}
                                nome="Administrador"
                                coment={item.ds_feedback}
                            />
                        )
                    })}

                </div>


            </div>
        </main>
   );
}