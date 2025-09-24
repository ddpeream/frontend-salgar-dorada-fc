import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormControl, Grid, TextField } from "@mui/material";
import { FormContainer, Image, Title, Form, Error } from "./form.style";
import { FormState } from "./interface/form-state";
import escudo from "../../assets/escudo-sd.jpg";
import { createPlayer } from "../../service/players/player.service";
import BackButton from "../../components/back-button";

export const FormPlayer: React.FC = () => {
  const [errorForm, setErrorForm] = React.useState<Error[]>([]);

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .max(50, "Debe tener 50 caracteres o menos")
      .required("El campo nombre es requerido"),
    apellido: Yup.string()
      .max(50, "Debe tener 50 caracteres o menos")
      .required("El campo apellido es requerido"),
    direccion: Yup.string()
      .max(100, "Debe tener 100 caracteres o menos")
      .required("El campo direccion es requerido"),
    tipo: Yup.string()
      .max(50, "Debe tener 50 caracteres o menos")
      .required("El campo tipo es requerido"),
    No: Yup.number()
      .typeError("Debe ser un número")
      .required("El campo No es requerido"),
    fecha_nacimiento: Yup.date()
      .typeError("Debe ser una fecha válida")
      .required("El campo fecha_nacimiento es requerido"),
    celular: Yup.number()
      .typeError("Debe ser un número")
      .required("El campo celular es requerido"),
    telefono: Yup.number()
      .typeError("Debe ser un número")
      .required("El campo telefono es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      tipo: "",
      No: "",
      direccion: "",
      fecha_nacimiento: new Date(),
      celular: "",
      telefono: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: FormState) => {
      try {
        console.log("Formulario Enviado", values);
        const formCreated = await createPlayer(values);
        console.log("handle:", formCreated);
        if(formCreated.status === 201){
          const { nombre, apellido, No } = formCreated?.data
          formik.resetForm();
          alert(`El jugador ${nombre} ${apellido} con la cedula ${No} ha sido creado exitosamente`)
        }
      } catch (error: any) {
        console.log("Error desde el formulario 1", error);
        setErrorForm(error.message);
        console.log("Error desde el formulario 2", errorForm);
      }
    },
  });

  const { handleSubmit, errors, touched } = formik;

  return (
    <FormContainer>
      <BackButton fallbackPath="/" />
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
                id="nombre"
                type="text"
                label="Nombre"
                {...formik.getFieldProps("nombre")}
                error={touched.nombre && Boolean(errors.nombre)}
                helperText={touched.nombre && errors.nombre}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Apellido"
                id="apellido"
                type="text"
                {...formik.getFieldProps("apellido")}
                error={touched.apellido && Boolean(errors.apellido)}
                helperText={touched.apellido && errors.apellido}
              />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="direccion"
                label="Direccion"
                type="text"
                {...formik.getFieldProps("direccion")}
                error={touched.direccion && Boolean(errors.direccion)}
                helperText={touched.direccion && errors.direccion}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="tipo"
                label="Tipo"
                type="text"
                {...formik.getFieldProps("tipo")}
                error={touched.tipo && Boolean(errors.tipo)}
                helperText={touched.tipo && errors.tipo}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="No"
                label="No"
                type="text"
                {...formik.getFieldProps("No")}
                error={touched.No && Boolean(errors.No)}
                helperText={touched.No && errors.No}
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
                id="telefono"
                label="Teléfono"
                {...formik.getFieldProps("telefono")}
                error={touched.telefono && Boolean(errors.telefono)}
                helperText={touched.telefono && errors.telefono}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type={"tel"}
                fullWidth={true}
                id="celular"
                label="Celular"
                {...formik.getFieldProps("celular")}
                error={touched.celular && Boolean(errors.celular)}
                helperText={touched.celular && errors.celular}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type={"Date"}
                fullWidth={true}
                id="fecha_nacimiento"
                label="Fecha de nacimiento"
                {...formik.getFieldProps("fecha_nacimiento")}
                error={
                  touched.fecha_nacimiento && Boolean(errors.fecha_nacimiento)
                }
                helperText={
                  touched.fecha_nacimiento && String(errors.fecha_nacimiento)
                }
              />
            </Grid>
          </Grid>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formik.isValid}
        >
          Crear Jugador
        </Button>
      </Form>
    </FormContainer>
  );
};
