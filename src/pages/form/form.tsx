import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Button, FormControl, Grid, TextField } from "@mui/material";
import { FormContainer, Image, Title, Form, Error } from "./form.style";
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
  const [errorForm, setErrorForm] = useState<Error[]>([]);

  const { nombre, apellido, telefono, celular, direccion, tipo, No } = formState;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formCreated = await createPlayer(formState);
      console.log("handle:", formState);
    } catch (error: any) {
      console.log("Error desde el formulario 1", error);
      setErrorForm(error.message);
      console.log("Error desde el formulario 2", errorForm);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    console.log("Retorno del formulario:", formState);
  };

  console.log("Error desde el formulario 2", errorForm);
  return (
    // <Formik initialValues={formState} onSubmit={handleChange}>
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
        <FormControl>
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="direccion"
              label="direccion"
              value={direccion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              name="tipo"
              label="tipo"
              value={tipo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="No"
              label="No"
              value={No}
              onChange={handleChange}
            />
          </Grid>
          </Grid>
        </FormControl>
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
        {errorForm.length > 0
          ? errorForm.map((err) => {
              console.log("cada error que sale", err);
              return (<Error key={err.toString()} >{err.toString()}</Error>);
            })
          : null}
        <Button type="submit" variant="contained" color="primary">
          Crear Jugador
        </Button>
      </Form>
    </FormContainer>
    // </Formik>
  );
};
