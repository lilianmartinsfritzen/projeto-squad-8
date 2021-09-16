import { Button } from "../../components/Button";

import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import calendarImg from '../../assets/images/calendar.svg'
import './styles.css'

const ScheduleList = () => {
  return (
    <main className="main">
      <section className="white-box">
        <img
          className="logo"
          src={logoFCamaraImg}
          alt="Logo FCamara"
        />
        <div className="white-box-content">
          <div className="white-box-text">
            <h2 className="deselect-schedule">Dermarcar Agendamento</h2>
          </div>
            <Button className="bud bud-orange">Quinta-feira, 05 de maio de 2022
              em São Paulo</Button>
            <Button className="bud bud-grey">Terça-feira, 10 de maio de 2022
              em São Paulo</Button>
            <Button className="bud bud-deselect">Desmarcar</Button>
        </div>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <img
            className="calendar-ilustration"
            src={calendarImg}
            alt="Ilustração de calendário"
          />
        </div>
      </section>
    </main>
  );
}

export default ScheduleList;