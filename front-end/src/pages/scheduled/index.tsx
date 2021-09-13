import './styles.css'
import { Button } from "../../components/Button";
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import dateImg from '../../assets/images/date.svg'
import confirmationImg from '../../assets/images/confirmation.svg'

const Scheduled = () => {
  return (
    <main className="main">
      <section className="white-box">
        <img
          className="logo"
          src={logoFCamaraImg}
          alt="Logo FCamara"
        />
        <div className="white-box-content">
          <img
            className="image-date"
            src={dateImg}
            alt="Imagem de Calendário"
          />
          <div className="white-box-text">
            <h2 className="scheduling">Agendamento confirmado</h2>
            <h2 className="date">Terça-feira, 10 de maio de 2022 em São Paulo</h2>
            <p className="address">R. Bela Cintra, 986 - 2° andar - Consolação São Paulo - SP, 01415-906</p>
            <p className="confirmed-workspace">Estação de Trabalho: <strong><u>FILEIRA 3 - MESA 12</u></strong></p>
          </div>
          <Button className="button" type="submit">Encerrar Sessão</Button>
        </div>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <img
            className="confirmation"
            src={confirmationImg}
            alt="Confirmação Ellipse"
          />
        </div>
      </section>
    </main>
  );
}

export default Scheduled;