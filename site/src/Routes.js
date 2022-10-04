import PageCadastrar from "./pages/admin/cadastrarAdocao"
import LoginPage from "./pages/login"
import AdoteFeed from "./pages/adote/feed/index.js"
import FeedAdocao from "./pages/admin/feedAdocao/index.js"
import LoginAdmin from "./pages/login"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro' element={<PageCadastrar/>} />
                <Route path='/' element={<LoginPage/>} />
                <Route path='/adoteFeed' element={<AdoteFeed/>} />
                <Route path='/feedAdocaoAdmin' element={<FeedAdocao/>}/>
            </Routes>
        </BrowserRouter>
    )
}