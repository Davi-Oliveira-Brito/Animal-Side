import React, { useEffect, useState } from 'react';
import './index.scss'

import NavBarAdmin from '../../../components/navBarAdmin/index.js';
import SideBarAdmin from '../../../components/sideBarAdmin/index.js';
import DadoUser from '../../../components/dados';
import CardPostUser from '../../../components/cardPostUser';






export default function userPost(){
    return (
        <main className="userPost-Main">
            <NavBarAdmin />
            <div className='componente'>
                <SideBarAdmin />
            </div>
            <div className='top-post'>
                <DadoUser/>
               <CardPostUser/>
            </div>
        </main>
    )
}