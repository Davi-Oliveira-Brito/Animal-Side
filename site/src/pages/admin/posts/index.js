import React, { useEffect, useState } from 'react';
import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SideBarAdmin from '../../../components/sideBarAdmin/index.js';




export default function Post() {
    return (
        <main className="feed-main">
            <NavBarAdmin />
            <div className='componente'>
                <SideBarAdmin />
            </div>
            <div className='top'>
                <input className='Barra-de-busca' type="text" placeholder='Buscar por nome' />
            </div>             
        </main>
    )
}