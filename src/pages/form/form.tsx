import React, { useState } from "react";

import {
  Select,
  Button,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { Form, FormContainer, Title } from "./form.style";
import { FormState } from "./interface/form-state";
import { TipoDocumento } from "./interface/tipo-documento";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DateFnsUtils from "@date-io/date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import DateFnsAdapter from '@mui/x-date-adapters/date-fns';

export const FormPlayer: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    nombre: "",
    apellido: "",
    email: "",

    documento_identidad: {
      tipo: "",
      No: null,
    },
    telefono: null,
    celular: null,
    fecha_nacimiento: new Date(),
    direccion: "",
  });

  const {
    nombre,
    apellido,
    email,
    telefono,
    documento_identidad,
    celular,
    fecha_nacimiento,
    direccion,
  } = formState;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Datos del formulario:", { nombre, apellido, email, telefono });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeDocumento = (event: SelectChangeEvent<TipoDocumento>) => {
    const tipoDocumento = event.target.value as TipoDocumento | undefined;
    console.log("tipo documento", tipoDocumento?.tipo);
    setFormState((prevState) => ({
      ...prevState,
      documento_identidad: {
        ...prevState.documento_identidad,
        tipo: tipoDocumento?.tipo || "",
      },
    }));
  };

  const handleFechaNacimientoChange = () => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>INSCRIPCIÓN DE JUGADORES</Title>
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
            type={"email"}
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
          />
          <FormControl style={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={4}>
                <Select
                  labelId="tipo-documento-label"
                  id="tipo-documento"
                  // value={documento_identidad.tipo}
                  onChange={handleChangeDocumento}
                  displayEmpty
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="" disabled>
                    Tipo de documento
                  </MenuItem>
                  <MenuItem value="CC">Cédula de ciudadanía</MenuItem>
                  <MenuItem value="TI">Tarjeta de identidad</MenuItem>
                  <MenuItem value="CE">Cédula de extranjería</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth={true}
                  name="No"
                  label="No"
                  value={formState.documento_identidad.No}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth={true}
                  type={"date"}
                  name="fecha_nacimiento"
                  // label="fecha_nacimiento"
                  // value={email}
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
              <Grid item xs={6}>
                <TextField
                  type={"tel"}
                  fullWidth={true}
                  name="telefono"
                  label="Teléfono"
                  value={telefono}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
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
    </LocalizationProvider>
  );
};
