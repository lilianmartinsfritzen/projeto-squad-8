import { Button } from "../../components/Button";

import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import desmarcarFinalImg from '../../assets/images/desmarcar-final.svg'
import checkImg from '../../assets/images/check.svg'
import './style.css'


const Cancelled = () => {
  return (
    <main className="main">
      <section className="white-box">
        <h1>        
        <a href="/">
          <img
            className="logo"
            src={logoFCamaraImg}
            alt="Logo FCamara"
          />
        </a>
        </h1>
        <div className="white-box-content-cancelled">
          <img
            className="check-icon"
            src={checkImg}
            alt="Ícone de Confirmação"
          />
          <div className="white-box-text-cancelled">
            <p className="orange-text-cancelled">Agendamento desmarcado</p>
            {/* Pegar informações sobre quem foi desmarcado!! */}
            <p className="info-text-cancelled">Quinta-feira, 05 de maio de 2022 em São Paulo</p>
          </div>
          <a href="/">
          <Button className="bud bud-cancelled" type='submit'>Encerrar Sessão</Button>
          </a>
        </div>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <img
            className="ilustracao-desmarcar-final"
            src={desmarcarFinalImg}
            alt="Ilustração Página de Confirmação Cancelamento"
          />
        </div>
      </section>
    </main>
  );
}

export default Cancelled;