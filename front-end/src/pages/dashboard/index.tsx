import { Button } from '../../components/Button';

import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import Ondulacoes from '../../assets/images/ondinhas.svg'
import ilustracaoHomeImg from '../../assets/images/ilustracao-home.svg'
import './styles.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {

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
        <div className="white-box-content-dashboard">
          <img
            className="waves" 
            src={Ondulacoes}
            alt="Logotipo FCamara"
          />
          <Link to="/components/ChangeCalendar" className="bud bud-dashboard" >Agendamento</Link>
          <Link to="/scheduleList" className="bud bud-dashboard">Desmarcar agendamento</Link>
          <Button className="bud bud-dashboard">Relatórios (em breve)</Button>
        </div>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <img
            className="ilustracao-dashboard"
            src={ilustracaoHomeImg}
            alt="Ilustracao Dashboard"
          />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;



