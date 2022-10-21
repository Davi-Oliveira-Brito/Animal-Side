import PageCadastrar from "./pages/admin/cadastrarAdocao/index.js"
import LoginPage  from "./pages/login/index.js"
import AdoteFeed  from "./pages/adote/feed/index.js"
import FeedAdocao from "./pages/admin/feedAdocao/index.js"
import LoginAdmin from "./pages/loginAdm"
import LadingPage from "./pages/home/index.js"
import AONG from "./pages/ong/index.js"
import ComentarioAdocao from "./pages/adote/comentario/index.js"
import Ajude from "./pages/ajude/index.js"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro' element={<PageCadastrar/>} />
                <Route path='/' element={<LadingPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/adoteFeed' element={<AdoteFeed/>} />
                <Route path='/feedAdocaoAdmin' element={<FeedAdocao/>}/>
                <Route path='/loginAdmin' element={<LoginAdmin/>}/>
                <Route path='/ong' element={<AONG/>}/>
                <Route path='/comentarioadocao' element={<ComentarioAdocao/>}/>
                <Route path='/Ajude' element={<Ajude/>}/>

            </Routes>
        </BrowserRouter>
    )
}