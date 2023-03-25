import React, { useState } from "react";
import { loginUser } from "../../service/login/login.service";
import { useNavigate } from "react-router-dom";
import { LoginCredentials } from "./login-credential.interface";
import {
  Container,
  ContainerForm,
  Image,
  Form,
  Label,
  Input,
  SendBoton,
  SingUpButton,
} from "./login.styles";
import escudo from "../../assets/escudo-sd.jpg";

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
    console.log("logueo: form", credentials);

    // Validación de campos requeridos
    if (!credentials.username || !credentials.password) {
      setError("Por favor ingresa tu email y contraseña");
      return;
    }

    const result = await loginUser(credentials);
    if (result) {
      navigate("/home");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };
  return (
    <Container>
      <ContainerForm>
        <Image src={escudo} />

        <Form onSubmit={handleSubmit}>
          <Label>Email address</Label>
          <Input
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="example@gmail.com"
            required // Agrega la propiedad required para validar que se ingrese un valor
            autoComplete="email" 
          />

          <Label>Password</Label>
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="********"
            required // Agrega la propiedad required para validar que se ingrese un valor
            autoComplete="current-password" 
          />

          {error && <p>{error}</p> /* Mostrar mensaje de error si hay un error */}

          <SendBoton type="submit" value="Log in" />
        </Form>

        <SingUpButton>Sign up</SingUpButton>
      </ContainerForm>
    </Container>
  );
};

