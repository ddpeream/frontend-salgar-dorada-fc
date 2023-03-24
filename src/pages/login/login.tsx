import React, { useState } from "react";
import { loginUser } from "../../service/login/login.service";
import { useNavigate }  from "react-router-dom"
import { LoginCredentials } from "./login-credential.interface";
import { Container, ContainerLogin } from "./login.styles";

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('logueo: form', credentials)
    const result = await loginUser(credentials);
    if (result) {
      navigate('/home');
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };
// const ruta_de_la_imagen = '../../assets/escudo-sd.jpg'
  return (
    <Container>
      hola
      {/* <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" name="username" onChange={handleInputChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Iniciar sesión</button>
      </form> */}
    </Container>
  );
};
