import React from "react";
import {
  Main,
  SectionTitle,
  SectionContent,
  Divider,
  CallToAction,
  CallToActionTitle,
  CallToActionButton,
  FeatureSection,
  FeatureImage,
  FeatureText,
  FeatureTitle,
  FeatureDescription,
} from "./home.style";
import escudo from "../../assets/escudo-sd.jpg";


export const Home: React.FC = () => {
  return (
    <Main>
      <SectionTitle>Visión</SectionTitle>
      <SectionContent>
        La visión que se tiene del club.
      </SectionContent>
      <Divider />
      <SectionTitle>Misión</SectionTitle>
      <SectionContent>
        La misión que se plantea el equipo.
      </SectionContent>
      <Divider />
      <FeatureSection>
        <FeatureImage
          src={escudo}
          alt="Feature Image"
        />
        <FeatureText>
          <FeatureTitle>Característica novedosa</FeatureTitle>
          <FeatureDescription>
            Una característica innovadora y única de nuestro club que lo diferencia de los demás equipos.
          </FeatureDescription>
          <CallToActionButton to="/players">Conoce la plantilla</CallToActionButton>
        </FeatureText>
      </FeatureSection>
      <Divider />
      <CallToAction id="unete">
        <CallToActionTitle>Únete a nuestro equipo</CallToActionTitle>
        <p>¿Quieres formar parte de nuestra familia? Únete hoy mismo.</p>
        <CallToActionButton to="/form">¡Únete ahora!</CallToActionButton>
      </CallToAction>
    </Main>
  );
};
