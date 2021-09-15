import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";

import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import ilustracaoLoginImg from '../../assets/images/ilustracao-login.svg'
import './style.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }
    
    await signIn(data)
  }

  return (
    <main className="main">
      <section className="white-box">
          <img
            className="logo" 
            src={logoFCamaraImg}
            alt="Logotipo FCamara"
            />
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label>Login</label>
            <input              
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              placeholder="Senha" />
          </div>
          <Button className="button" type="submit">Entrar</Button>
          {/* <button>Entrar</button> */}
        </form>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <p className="orange-box-text">Estamos aqui para facilitar o agendamento da sua ida ao escritório, fazendo com que ele se torne rápido e seguro para todos!</p>
          <img
            className="ilustracao-login"
            src={ilustracaoLoginImg}
            alt="ilustração-login"
          />
        </div>
      </section>
    </main>
  );
}



