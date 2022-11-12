import PageCadastrar from "./pages/admin/cadastrarAdocao/index.js"
import LoginPage  from "./pages/login/index.js"
import AdoteFeed  from "./pages/adote/feed/index.js"
import FeedAdocao from "./pages/admin/feedAdocao/index.js"
import LoginAdmin from "./pages/loginAdm"
import LadingPage from "./pages/home/index.js"
import AONG from "./pages/ong/index.js"
import ComentarioAdocao from "./pages/adote/comentario/index.js"
import Ajude from "./pages/ajude/index.js"
import PerfilUser from "./pages/usuario/perfil/index.js"
import Post from "./pages/admin/posts/index.js"
import CadastrarAnimalPerdido from "./pages/usuario/cadastrarPerdido/index.js"
import DoarPage from "./pages/doar/index.js"
import UserComent from "./pages/usuario/comentario/index.js"
import Feedback from "./pages/usuario/feedback/index.js"
import PerfilAdm from "./pages/admin/perfil/index.js"
import MeusInteresses from "./pages/usuario/meusInteresses/index.js"

import QuemSomos from "./pages/quemSomos/index.js"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CriarConta from "./pages/usuario/criarConta/index.js"
import UserFeedBack from "./pages/usuario/feedback/index.js"
import UserCadastrarPerdido from "./pages/usuario/cadastrarPerdido/index.js"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/*Landing page*/}
                <Route path='/' element={<LadingPage/>} />
                <Route path='/ong' element={<AONG/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
                <Route path='/ajude' element={<Ajude/>}/>
                
                {/*usuario*/}
                <Route path='/userPerfil' element={<PerfilUser/>}/>
                <Route path='/userComment' element={<UserComent/>}/>
                <Route path='/userFeedBack' element={<UserFeedBack/>}/>
                <Route path='/userCadastrarPerdido' element={<UserCadastrarPerdido/>}/>
                
                <Route path='/feedadocao' element={<AdoteFeed/>} />
                <Route path='/comentarios/user' element={<UserComent/>} />
                
                
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/loginadmin' element={<LoginAdmin/>}/>
                
                <Route path='/cadastro' element={<PageCadastrar/>} />
                <Route path='/post' element={<Post/>} />
                                
                <Route path='/feedadocaoadmin' element={<FeedAdocao/>}/>
                
                <Route path='/doar' element={<DoarPage/>}/>
                
                <Route path='/comentarioadocao' element={<ComentarioAdocao/>}/>

                <Route path='/adminPerfil' element={<PerfilAdm/>}/>
                <Route path='/cadastro/usuario' element={<CriarConta/>}/>
                <Route path='/cadastroperdido' element={<CadastrarAnimalPerdido/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
                <Route path='/meusinteresses' element={<MeusInteresses/>}/>


            </Routes>
        </BrowserRouter>
    )
}