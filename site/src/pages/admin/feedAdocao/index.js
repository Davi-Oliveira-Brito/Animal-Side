import './index.scss'
import NavBarAdmin from  '../../../components/navBarAdmin/index.js'
import SideBarAdmin from '../../../components/sideBarAdmin/index.js'
import CardFeedAdmin from '../../../components/cardFeedAdmin/index.js'

export default function FeddAdocao(){


    return(
        <main className="feed-main">
            <NavBarAdmin/>
            <div className='compSide'>
            <SideBarAdmin/>
            </div>

            <div className='card-input'>
                <input className='input' type='text' placeholder='Busca por nome'/>
            <CardFeedAdmin nome='Spike' raca='vira-lata' porte='G' idade='11' pref='casa' />
            </div>
        </main>
    )
}