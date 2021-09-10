import React from 'react';

import './style.css' 
import { Button } from "../../components/Button";
import logo from '../../assets/images/logo-fcamara.svg'
import ilustracaoDesmarcarFinal from '../../assets/images/ilustracao-desmarcar-final.svg'
import checkIncon from '../../assets/images/desmarcar-final-check.svg'


const DesmarcarFinal = () => {
    return(
        <>
            <aside className="white-box">
                <h1><img className="logo" src={logo}></img></h1>
                <div className="white-box-content">
                    <img className="logo" src={checkIncon}></img>
                    <div className="white-box-text">
                        <p className="orange-text">Agendamento desmarcado</p>
                        {/* Pegar informações sobre quem foi desmarcado!! */}
                        <p className="info-text">Quinta-feira, 05 de maio de 2022 em São Paulo</p>
                    </div>
                    <Button className="button" type='submit'>Encerrar Sessão</Button>
                </div>
            </aside>
            <main className="orange-box">
                <div className="orange-box-content">
                    <img className="ilustracao-desmarcar-final" src={ilustracaoDesmarcarFinal}></img>
                </div>
            </main>
        </>
    );
}

export default DesmarcarFinal;
