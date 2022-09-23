import PageCadastrar from "./pages/admin/cadastrarAdocao"
import LoginPage from "./pages/login"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageCadastrar/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    )
}