import React from "react";
import { useForm } from "react-hook-form";

import './style.css' 
import { Button } from "../../components/Button";
import logo from '../../assets/images/logo-fcamara.svg'
import ilustracaoLogin from '../../assets/images/ilustracao-login.svg'

type FormData = {
    email: string;
    password: string;
  }

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
      console.log(formData)
    }
      
    return (
        <main className="main">
            <section className="white-box">
                <h1><img className="logo" src={logo}></img></h1>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Login</label>
                        <input 
                            {...register("email")}
                            name="email" 
                            type="email" 
                            placeholder="E-mail"/>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input 
                            {...register("password")}
                            name="password" 
                            type="password" 
                            placeholder="Senha"/>
                    </div>
                    <Button className="button" type='submit'>Entrar</Button>
                    {/* <button>Entrar</button> */}
                </form>
            </section>
            <section className="orange-box">
                <div className="orange-box-content">
                    <p className="orange-box-text">Estamos aqui para facilitar o agendamento da sua ida ao escritório, fazendo com que ele se torne rápido e seguro para todos!</p>
                    <img className="ilustracao-login" src={ilustracaoLogin}></img>
                </div>
            </section>
        </main>
    );
}

export default Login;