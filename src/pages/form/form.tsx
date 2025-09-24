import React from "react";
import { AnimatePresence } from "framer-motion";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { useAppTranslation } from "../../i18n/hooks";

const phoneRegex = /^[0-9()+\-\s]{7,}$/;
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

export const FormPlayer: React.FC = () => {
  const { t } = useAppTranslation();
  const [feedback, setFeedback] = React.useState<FeedbackState>(null);

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .max(50, String(t('form.validation.maxCharacters', { count: 50 })))
      .required(String(t('form.validation.requiredName'))),
    apellido: Yup.string()
      .max(50, String(t('form.validation.maxCharacters', { count: 50 })))
      .required(String(t('form.validation.requiredLastName'))),
    direccion: Yup.string()
      .max(100, String(t('form.validation.maxCharacters', { count: 100 })))
      .required(String(t('form.validation.requiredAddress'))),
    tipo: Yup.string()
      .max(40, String(t('form.validation.maxCharacters', { count: 40 })))
      .required(String(t('form.validation.requiredPlayerType'))),
    No: Yup.string()
      .max(5, String(t('form.validation.maxCharacters', { count: 5 })))
      .required(String(t('form.validation.requiredId'))),
    fecha_nacimiento: Yup.string()
      .required(String(t('form.validation.requiredBirthDate')))
      .test("valid-date", String(t('form.validation.validDate')), (value) =>
        value ? !Number.isNaN(Date.parse(value)) : false
      ),
    celular: Yup.string()
      .matches(phoneRegex, String(t('form.validation.validPhone')))
      .required(String(t('form.validation.requiredPhone'))),
    telefono: Yup.string()
      .matches(phoneRegex, String(t('form.validation.validLandline')))
      .required(String(t('form.validation.requiredLandline'))),
  });

  const formSections = [
    {
      id: "datos-personales",
      title: String(t('form.personalData')),
      description: String(t('form.personalDataDescription')),
      fields: [
        {
          name: "nombre",
          label: String(t('form.firstName')),
          type: "text",
          placeholder: String(t('form.firstNamePlaceholder')),
          autoComplete: "given-name",
        },
        {
          name: "apellido",
          label: String(t('form.lastName')),
          type: "text",
          placeholder: String(t('form.lastNamePlaceholder')),
          autoComplete: "family-name",
        },
        {
          name: "fecha_nacimiento",
          label: String(t('form.birthDate')),
          type: "date",
          placeholder: String(t('form.birthDatePlaceholder')),
          autoComplete: "bday",
        },
      ],
    },
    {
      id: "datos-contacto",
      title: String(t('form.contactData')),
      description: String(t('form.contactDataDescription')),
      fields: [
        {
          name: "telefono",
          label: String(t('form.phone')),
          type: "tel",
          placeholder: String(t('form.phonePlaceholder')),
          autoComplete: "tel",
        },
        {
          name: "celular",
          label: String(t('form.mobile')),
          type: "tel",
          placeholder: String(t('form.mobilePlaceholder')),
          autoComplete: "tel-national",
        },
        {
          name: "direccion",
          label: String(t('form.address')),
          type: "text",
          placeholder: String(t('form.addressPlaceholder')),
          autoComplete: "street-address",
        },
      ],
    },
    {
      id: "datos-deportivos",
      title: String(t('form.sportsData')),
      description: String(t('form.sportsDataDescription')),
      fields: [
        {
          name: "tipo",
          label: String(t('form.position')),
          type: "text",
          placeholder: String(t('form.positionPlaceholder')),
          autoComplete: "off",
        },
        {
          name: "No",
          label: String(t('form.identification')),
          type: "text",
          placeholder: String(t('form.identificationPlaceholder')),
          autoComplete: "off",
        },
      ],
    },
  ];

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
          message: String(t('form.feedback.success')),
        });
        resetForm();
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          error?.message ??
          String(t('form.feedback.error'));
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
            {t('form.officialCall')}
          </Badge>
          <FormTitle>{t('form.title')}</FormTitle>
          <FormSubtitle>
            {t('form.subtitle')}
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
              <SubmitTitle>{t('form.submitTitle')}</SubmitTitle>
              <SubmitHint>
                {t('form.submitHint')}
              </SubmitHint>
            </SubmitTextGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('form.submitting') : t('form.submitButton')}
              <span aria-hidden>→</span>
            </SubmitButton>
          </SubmitRow>
          <FormFooterNote>
            {t('form.footerNote')}
          </FormFooterNote>
        </StyledForm>
      </FormContent>
    </FormContainer>
  );
};
