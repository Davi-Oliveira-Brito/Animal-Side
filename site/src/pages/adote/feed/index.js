import './index.scss'
import NavBar from '../../../components/navBar/index.js'
import SideBar from '../../../components/sideBar/index.js'
import CardFeed from '../../../components/cardFeed/index.js'

export default function(){

    return(
        <main className="feedmain">
            <NavBar/>
            <div className="top">
               <img className="dog-procure" src="/assets/images/orangeDog.png" alt="" /> 
               <input className="pesquisa" type="text" placeholder="Procure seu Bichinho..."  />
            </div>
            <div className="bottom">
                <div className="comp-side">
                    <SideBar/>
                </div>
                
                <CardFeed nome="Cachorrinho Daora" visto="VELHEIROS"desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque audantium sed ut perspiciatis unde " idade="11 Anos" />


            </div>
        </main>
    )
}