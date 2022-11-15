import React, { useEffect, useState } from 'react';
import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import DadoUser from '../../../components/dados';
import CardPostUser from '../../../components/cardPostUser';
import SideBarUsuario from '../../../components/sidebarUsuario'





export default function userPost(){
    return (
        <main className="userPost-Main">
            <SideBarUsuario/>
            <NavBarAdmin />
            <div className='top-post'>
                <DadoUser/>
               <CardPostUser/>
            </div>
        </main>
    )
}