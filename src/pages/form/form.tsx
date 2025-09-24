import React from "react";
import { AnimatePresence } from "framer-motion";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  BackgroundGlow,
  BackgroundAurora,
  FormContent,
  BackButtonWrapper,
  FormHeader,
  Badge,
  BadgeIcon,
  FormTitle,
  FormSubtitle,
  StyledForm,
  SectionCard,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  FieldGrid,
  FieldWrapper,
  FloatingLabel,
  TextInput,
  ErrorMessage,
  SubmitRow,
  SubmitTextGroup,
  SubmitTitle,
  SubmitHint,
  SubmitButton,
  ServerMessage,
  FormFooterNote,
} from "./form.style";
import { FormState } from "./interface/form-state";
import escudo from "../../assets/escudo-sd.jpg";
import { createPlayer } from "../../service/players/player.service";
import { formCreatedDto } from "../../service/players/player.interfase";
import BackButton from "../../components/back-button";

type FeedbackState = {
  type: "success" | "error";
  message: string;
} | null;

const phoneRegex = /^[0-9()+\-\s]{7,}$/;

const validationSchema = Yup.object({
  nombre: Yup.string()
    .max(50, "Máximo 50 caracteres")
    .required("El nombre es obligatorio"),
  apellido: Yup.string()
    .max(50, "Máximo 50 caracteres")
    .required("El apellido es obligatorio"),
  direccion: Yup.string()
    .max(100, "Máximo 100 caracteres")
    .required("La dirección es obligatoria"),
  tipo: Yup.string()
    .max(40, "Máximo 40 caracteres")
    .required("El tipo de jugador es obligatorio"),
  No: Yup.string()
    .max(5, "Máximo 5 caracteres")
    .required("El número de identificación es obligatorio"),
  fecha_nacimiento: Yup.string()
    .required("La fecha de nacimiento es obligatoria")
    .test("valid-date", "Ingresa una fecha válida", (value) =>
      value ? !Number.isNaN(Date.parse(value)) : false
    ),
  celular: Yup.string()
    .matches(phoneRegex, "Ingresa un celular válido")
    .required("El celular es obligatorio"),
  telefono: Yup.string()
    .matches(phoneRegex, "Ingresa un teléfono válido")
    .required("El teléfono es obligatorio"),
});

const formSections = [
  {
    id: "datos-personales",
    title: "Datos personales",
    description: "Cuéntanos quién eres y cuándo celebras tu cumpleaños.",
    fields: [
      {
        name: "nombre",
        label: "Nombre",
        type: "text",
        placeholder: "Nombre del jugador",
        autoComplete: "given-name",
      },
      {
        name: "apellido",
        label: "Apellido",
        type: "text",
        placeholder: "Apellidos",
        autoComplete: "family-name",
      },
      {
        name: "fecha_nacimiento",
        label: "Fecha de nacimiento",
        type: "date",
        placeholder: "DD/MM/AAAA",
        autoComplete: "bday",
      },
    ],
  },
  {
    id: "datos-contacto",
    title: "Datos de contacto",
    description: "Necesitamos formas de comunicación para confirmar tu inscripción.",
    fields: [
      {
        name: "telefono",
        label: "Teléfono fijo",
        type: "tel",
        placeholder: "Teléfono principal",
        autoComplete: "tel",
      },
      {
        name: "celular",
        label: "Celular",
        type: "tel",
        placeholder: "Celular de contacto",
        autoComplete: "tel-national",
      },
      {
        name: "direccion",
        label: "Dirección",
        type: "text",
        placeholder: "Dirección completa",
        autoComplete: "street-address",
      },
    ],
  },
  {
    id: "datos-deportivos",
    title: "Perfil deportivo",
    description: "Aporta información clave para ubicarte en el plantel.",
    fields: [
      {
        name: "tipo",
        label: "Posición",
        type: "text",
        placeholder: "Posición natural",
        autoComplete: "off",
      },
      {
        name: "No",
        label: "Identificación",
        type: "text",
        placeholder: "Documento o dorsal",
        autoComplete: "off",
      },
    ],
  },
];

export const FormPlayer: React.FC = () => {
  const [feedback, setFeedback] = React.useState<FeedbackState>(null);

  const formik = useFormik<FormState>({
    initialValues: {
      nombre: "",
      apellido: "",
      tipo: "",
      No: "",
      direccion: "",
      fecha_nacimiento: "",
      celular: "",
      telefono: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload: formCreatedDto = {
          nombre: values.nombre.trim(),
          apellido: values.apellido.trim(),
          tipo: values.tipo.trim(),
          No: values.No.trim(),
          direccion: values.direccion.trim(),
          telefono: values.telefono.trim(),
          celular: values.celular.trim(),
          fecha_nacimiento: values.fecha_nacimiento
            ? new Date(values.fecha_nacimiento)
            : undefined,
        };

        await createPlayer(payload);
        setFeedback({
          type: "success",
          message: "Tu inscripción ha sido recibida. Nuestro staff te contactará muy pronto.",
        });
        resetForm();
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          error?.message ??
          "No pudimos procesar tu inscripción. Inténtalo nuevamente en unos minutos.";
        setFeedback({ type: "error", message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, submitCount, isSubmitting } = formik;

  return (
    <FormContainer>
      <BackgroundGlow
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <BackgroundAurora
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <FormContent
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <BackButtonWrapper>
          <BackButton fallbackPath="/" />
        </BackButtonWrapper>
        <FormHeader
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        >
          <Badge>
            <BadgeIcon src={escudo} alt="Escudo Salgar Dorada FC" />
            Convocatoria oficial 2025
          </Badge>
          <FormTitle>Inscripción de jugadores</FormTitle>
          <FormSubtitle>
            Completa el formulario para postularte a la próxima camada de talento Salgar Dorada FC. Cada dato nos ayuda a conocerte mejor.
          </FormSubtitle>
        </FormHeader>
        <AnimatePresence>
          {feedback && (
            <ServerMessage
              key={feedback.type + feedback.message}
              $type={feedback.type}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {feedback.message}
            </ServerMessage>
          )}
        </AnimatePresence>
        <StyledForm
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: "easeOut", delay: 0.2 }}
        >
          {formSections.map((section, index) => (
            <SectionCard
              key={section.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            >
              <SectionHeader>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionDescription>{section.description}</SectionDescription>
              </SectionHeader>
              <FieldGrid>
                {section.fields.map((field) => {
                  const fieldProps = getFieldProps(field.name as keyof FormState);
                  const rawValue = fieldProps.value as string;
                  const hasValue = Boolean(rawValue);
                  const fieldError = getIn(errors, field.name);
                  const fieldTouched = getIn(touched, field.name);
                  const showError = Boolean(fieldError) && (fieldTouched || submitCount > 0);

                  return (
                    <FieldWrapper key={field.name} $hasError={showError}>
                      <FloatingLabel
                        htmlFor={field.name}
                        $active={hasValue}
                        $hasError={showError}
                      >
                        {field.label}
                      </FloatingLabel>
                      <TextInput
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        $hasError={showError}
                        {...fieldProps}
                        onBlur={(event) => {
                          fieldProps.onBlur(event);
                          if (feedback) {
                            setFeedback(null);
                          }
                        }}
                        onChange={(event) => {
                          fieldProps.onChange(event);
                          if (feedback) {
                            setFeedback(null);
                          }
                        }}
                        aria-invalid={showError}
                        aria-describedby={`${field.name}-error`}
                        inputMode={field.type === "tel" ? "tel" : undefined}
                      />
                      <AnimatePresence>
                        {showError && (
                          <ErrorMessage
                            id={`${field.name}-error`}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                          >
                            {fieldError as string}
                          </ErrorMessage>
                        )}
                      </AnimatePresence>
                    </FieldWrapper>
                  );
                })}
              </FieldGrid>
            </SectionCard>
          ))}
          <SubmitRow>
            <SubmitTextGroup>
              <SubmitTitle>Listo para unirte</SubmitTitle>
              <SubmitHint>
                Nuestro equipo revisará tus datos y te contactará para agendar las pruebas. Mantén tu teléfono disponible.
              </SubmitHint>
            </SubmitTextGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              <span aria-hidden>→</span>
            </SubmitButton>
          </SubmitRow>
          <FormFooterNote>
            Al enviar autorizas el tratamiento de datos personales según las políticas del club.
          </FormFooterNote>
        </StyledForm>
      </FormContent>
    </FormContainer>
  );
};
