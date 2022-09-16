import PageCadastrar from "./pages/admin/cadastrar"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageCadastrar/>} />
            </Routes>
        </BrowserRouter>
    )
}