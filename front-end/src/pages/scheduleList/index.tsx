import './styles.css'
import { Button } from "../../components/Button";
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import calendarImg from '../../assets/images/calendar.svg'


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
            <Button className="button button-orange" type='submit'>Quinta-feira, 05 de maio de 2022
              em São Paulo</Button>
            <Button className="button button-grey" type='submit'>Terça-feira, 10 de maio de 2022
              em São Paulo</Button>
            <Button className="button button-deselect" type='submit'>Desmarcar</Button>
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