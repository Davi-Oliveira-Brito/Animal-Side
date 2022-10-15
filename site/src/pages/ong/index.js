import './index.scss'
import NavBar from '../../components/navBar/index.js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function PageOng() {

    return (
        <main className="ong-mom">
            <NavBar />

            <section className="ong-hero">
                <div className="sub-hero">
                    <h1 className='title'>Todos eles merecem uma chance de amor!</h1>
                    <p className="desc">Conheça nossa ONG</p>
                </div>
            </section>

            <section className="carro">
            </section>

        </main>

    );
}