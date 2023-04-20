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
  Error,
} from "./login.styles";
import escudo from "../../assets/escudo-sd.jpg";
import axios, { AxiosError } from "axios";

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
  
    try {
      const result = await loginUser(credentials);
      console.log('Result', result)
      if (result)navigate("/form");
    } catch (error) {
        console.log(error);
        setError(`${error}`);
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
            required
            autoComplete="email" 
          />

          <Label>Password</Label>
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="********"
            required
            autoComplete="current-password" 
          />

          {error && <Error>{error}</Error>}

          <SendBoton type="submit" value="Log in" />
        </Form>

        <SingUpButton>Sign up</SingUpButton>
      </ContainerForm>
    </Container>
  );
};
