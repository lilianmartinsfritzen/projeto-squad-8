import './style.css'
import { Button } from "../../components/Button";
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import desmarcarFinalImg from '../../assets/images/desmarcar-final.svg'
import checkImg from '../../assets/images/check.svg'


const Cancelled = () => {
  return (
    <main className="main">
      <section className="white-box">
        <h1>
          <img
            className="logo"
            src={logoFCamaraImg}
            alt="Logo FCamara"
          />
        </h1>
        <div className="white-box-content">
          <img
            className="check-icon"
            src={checkImg}
            alt="Ícone de Confirmação"
          />
          <div className="white-box-text">
            <p className="orange-text">Agendamento desmarcado</p>
            {/* Pegar informações sobre quem foi desmarcado!! */}
            <p className="info-text">Quinta-feira, 05 de maio de 2022 em São Paulo</p>
          </div>
          <Button className="button" type='submit'>Encerrar Sessão</Button>
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