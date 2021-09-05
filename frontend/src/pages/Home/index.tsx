import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
}

const Home = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("email")}
        name="email" 
        type="email" 
        placeholder="E-mail"/>
      <input 
        {...register("password")}
        name="password" 
        type="password" 
        placeholder="Senha"/>
      <button>Entrar</button>
    </form>
  )
};

export default Home;