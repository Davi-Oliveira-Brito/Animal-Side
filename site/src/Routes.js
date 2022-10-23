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

import QuemSomos from "./pages/quemSomos/index.js"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<LadingPage/>} />
                <Route path='/ong' element={<AONG/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
                <Route path='/ajude' element={<Ajude/>}/>
                <Route path='/feedadocao' element={<AdoteFeed/>} />
                
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/loginadmin' element={<LoginAdmin/>}/>
                
                <Route path='/cadastro' element={<PageCadastrar/>} />
                <Route path='/post' element={<Post/>} />
                                
                <Route path='/feedadocaoadmin' element={<FeedAdocao/>}/>
                
                <Route path='/comentarioadocao' element={<ComentarioAdocao/>}/>

                <Route path='/userPerfil' element={<PerfilUser/>}/>

            </Routes>
        </BrowserRouter>
    )
}