import React from 'react';

import './style.css' 
import { Button } from "../../components/Button";
import logo from '../../assets/images/logo-fcamara.png'
import ilustracaoLogin from '../../assets/images/ilustracao-home.png'


const Home = () => {
    return(
        <>
            <aside className="white-box">
                <h1><img className="logo" src={logo}></img></h1>
                <div>
                {/* <Button className="button" type='submit'>Entrar</Button> */}
                </div>
            </aside>
            <main className="orange-box">
                <div className="orange-box-content">
                    <img className="ilustracao-home" src={ilustracaoLogin}></img>
                </div>
            </main>
        </>
    );
}

export default Home;
