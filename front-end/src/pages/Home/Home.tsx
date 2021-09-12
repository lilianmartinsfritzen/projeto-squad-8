import React from 'react';

import './style.css' 
import { Button } from "../../components/Button";
import logo from '../../assets/images/logo-fcamara.svg'
import ilustracaoHome from '../../assets/images/ilustracao-home.svg'


const Home = () => {
    return(
        <main className="main">
            <section className="white-box">
                <h1><img className="logo" src={logo}></img></h1>
                <div className="white-box-content">
                <Button className="button" type='submit'>Agendamento</Button>
                <Button className="button" type='submit'>Desmarcar agendamento</Button>
                <Button className="button" type='submit'>Relatórios (em breve)</Button>
                </div>
            </section>
            <section className="orange-box">
                <div className="orange-box-content">
                    <img className="ilustracao-home" src={ilustracaoHome}></img>
                </div>
            </section>
        </main>
    );
}

export default Home;
