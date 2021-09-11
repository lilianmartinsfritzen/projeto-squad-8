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
        <>
            <aside className="white-box">
                <h1><img className="logo" src={logo}></img></h1>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <p>Login</p>
                    <input 
                        {...register("email")}
                        name="email" 
                        type="email" 
                        placeholder="E-mail"/>
                    <p>Senha</p>
                    <input 
                        {...register("password")}
                        name="password" 
                        type="password" 
                        placeholder="Senha"/>
                    <Button className="button" type='submit'>Entrar</Button>
                    {/* <button>Entrar</button> */}
                </form>
            </aside>
            <main className="orange-box">
                <div className="orange-box-content">
                    <p className="orange-box-text">Estamos aqui para facilitar o agendamento da sua ida ao escritório, fazendo com que ele se torne rápido e seguro para todos!</p>
                    <img className="ilustracao-login" src={ilustracaoLogin}></img>
                </div>
            </main>
        </>
    );
}

export default Login;