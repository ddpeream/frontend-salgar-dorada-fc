import React, { useState } from "react";

import { Button, FormControl, Grid, TextField } from "@mui/material";
import {
  Form,
  FormContainer,
  Image,
  Title,
  StyledTextField,
} from "./form.style";
import { FormState } from "./interface/form-state";
import escudo from "../../assets/escudo-sd.jpg";
import { createPlayer } from "../../service/players/player.service";

export const FormPlayer: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    nombre: "",
    apellido: "",
    tipo: "",
    No: "",
    direccion: "",
    fecha_nacimiento: new Date(),
    celular: "",
    telefono: "",
  });

  const { nombre, apellido, telefono, celular, fecha_nacimiento, direccion } =
    formState;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formCreated = await createPlayer(formState);
    console.log("Retorno del formulario:", formCreated);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
        >
          <Image src={escudo} />
          <Title>INSCRIPCIÓN DE JUGADORES</Title>
          <Image src={escudo} />
        </Grid>
        <FormControl style={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                name="nombre"
                label="Nombre"
                value={nombre}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                name="apellido"
                label="Apellido"
                value={apellido}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </FormControl>
        <TextField
          name="direccion"
          label="direccion"
          value={direccion}
          onChange={handleChange}
        />
        <FormControl style={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={4}>
              <TextField
                type={"tel"}
                fullWidth={true}
                name="telefono"
                label="Teléfono"
                value={telefono}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type={"tel"}
                fullWidth={true}
                name="celular"
                label="celular"
                value={celular}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Crear Jugador
        </Button>
      </Form>
    </FormContainer>
  );
};
