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
    const result = await loginUser(credentials);
    if (result) {
      navigate("/home");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };
  const ruta_de_la_imagen = "../../assets/escudo-sd.jpg";
  console.log("IMAGEN: ", ruta_de_la_imagen);
  return (
    <Container>
      <ContainerForm>
        <Image src={escudo} />

        <Form onSubmit={handleSubmit}>
          <Label>Email addres</Label>
          <Input
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="example@gmail.com"
          />

          <Label>Password</Label>
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="********"
          />

          <SendBoton type="submit" value="Log in" />

          <a href="/">Forgot my password</a>
        </Form>

        <SingUpButton>Sign up</SingUpButton>
      </ContainerForm>
    </Container>
  );
};
