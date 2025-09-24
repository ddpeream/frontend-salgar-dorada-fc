import React from "react";
import {
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionProps,
} from "framer-motion";
import {
  Main,
  Hero,
  ParallaxImage,
  HeroOverlay,
  HeroContent,
  Accent,
  HeroTitle,
  HeroSubtitle,
  ButtonRow,
  FilledButton,
  OutlineButton,
  StatBoard,
  StatItem,
  StatValue,
  StatLabel,
  HighlightsSection,
  SectionHeading,
  SectionTitle,
  SectionLead,
  HighlightsGrid,
  HighlightCard,
  CardTag,
  CardTitle,
  CardDescription,
  CardFooter,
  CardMeta,
  CardButton,
  CTASection,
  CTAContent,
  CTAAccent,
  CTATitle,
  CTAText,
  CTAButtons,
  CTAVisual,
  CTALogo,
  Divider,
  SliderSection,
  SliderContainer,
  SliderViewport,
  SliderItem,
  SliderImage,
  SliderDetails,
  SliderLabel,
  SliderTitle,
  SliderText,
  SliderControls,
  ControlButton,
  ScrollRevealSection,
} from "./home.style";
import escudo from "../../assets/escudo-sd.jpg";
import sdCasa from "../../assets/sd-casa.jpeg";
import sdVisitante from "../../assets/sd-visitante.jpeg";
import sdCasaBody from "../../assets/sd-casa-body.jpeg";
import sdVisitanteBody from "../../assets/sd-visitante-body.jpeg";

const stats = [
  { value: "32", label: "Talentos en formación" },
  { value: "12", label: "Staff especializado" },
  { value: "48K", label: "Hinchas conectados" },
];

const highlightCards = [
  {
    tag: "Metodología",
    title: "Entrenamiento inteligente y personalizado",
    description:
      "Sesiones con analítica de rendimiento y feedback inmediato para potenciar cada detalle técnico.",
    meta: "+140 horas de video-análisis",
    action: { label: "Ver filosofía", to: "/players" },
  },
  {
    tag: "Academia",
    title: "Talento joven que evoluciona con propósito",
    description:
      "Programas escalonados para categorías formativas con mentores que impulsan disciplina y liderazgo.",
    meta: "Imaginamos el próximo debut",
    action: { label: "Quiero probarme", to: "/form" },
  },
  {
    tag: "Innovación",
    title: "Experiencias inmersivas para la afición",
    description:
      "Contenido exclusivo, streaming multicámara y acceso anticipado a eventos para quienes viven el club 24/7.",
    meta: "Fan engagement en tiempo real",
    action: { label: "Explorar novedades", to: "/login" },
  },
];

const sliderItems = [
  {
    image: sdCasa,
    label: "Partidos en casa",
    title: "Un fortín en cada jornada",
    text: "Vive el ambiente electrizante del Coliseo Metropolitano con mosaicos, cánticos y fútbol total.",
  },
  {
    image: sdVisitante,
    label: "Estilo visitante",
    title: "Personalidad en cualquier cancha",
    text: "Una propuesta valiente, dinámica y vertical que sorprende a rivales y conquista nuevas plazas.",
  },
  {
    image: sdVisitanteBody,
    label: "Entrenamientos",
    title: "Tecnología al servicio del equipo",
    text: "GPS, sensores biométricos y simulaciones para diseñar cargas óptimas y llegar listos a cada reto.",
  },
];

const revealProps: MotionProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const Home: React.FC = () => {
  const heroRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const totalSlides = sliderItems.length;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);

  const goToSlide = React.useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setCurrentSlide((prev) => {
        const next = (prev + dir + totalSlides) % totalSlides;
        return next;
      });
    },
    [totalSlides]
  );

  React.useEffect(() => {
    const timer = window.setInterval(() => goToSlide(1), 6500);
    return () => window.clearInterval(timer);
  }, [goToSlide]);

  const currentSlideData = sliderItems[currentSlide];

  return (
    <Main>
      <Hero ref={heroRef}>
        <ParallaxImage
          style={{
            backgroundImage: `url(${sdCasaBody})`,
            y: parallaxY,
            scale: parallaxScale,
          }}
        />
        <HeroOverlay />
        <HeroContent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Accent>
            Salgar Dorada FC · ADN competitivo
            <span role="presentation">⚡</span>
          </Accent>
          <HeroTitle>Una casa para soñar, entrenar y ganar.</HeroTitle>
          <HeroSubtitle>
            Impulsamos talento con metodología innovadora, estadios vibrantes y una comunidad que nunca deja de alentar.
          </HeroSubtitle>
          <ButtonRow>
            <FilledButton to="/players">Conoce la plantilla</FilledButton>
            <OutlineButton to="/form">Súmate al club</OutlineButton>
          </ButtonRow>
          <StatBoard>
            {stats.map((stat) => (
              <StatItem key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatBoard>
        </HeroContent>
      </Hero>

      <ScrollRevealSection {...revealProps}>
        <HighlightsSection>
          <SectionHeading>
            <Accent>Visión &amp; misión</Accent>
            <SectionTitle>Fútbol con identidad, innovación y pertenencia.</SectionTitle>
            <SectionLead>
              Nuestra visión es liderar el desarrollo deportivo de la región; nuestra misión, acompañar a cada atleta y fan en un viaje inolvidable.
            </SectionLead>
          </SectionHeading>
          <HighlightsGrid>
            {highlightCards.map((card) => (
              <HighlightCard
                key={card.title}
                whileHover={{ y: -14, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <CardTag>{card.tag}</CardTag>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardFooter>
                  <CardMeta>{card.meta}</CardMeta>
                  {card.action && (
                    <CardButton to={card.action.to}>
                      {card.action.label}
                      <span aria-hidden>→</span>
                    </CardButton>
                  )}
                </CardFooter>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </HighlightsSection>
      </ScrollRevealSection>

      <Divider />

      <ScrollRevealSection {...revealProps}>
        <CTASection id="unete">
          <CTAContent>
            <CTAAccent>Únete a la experiencia</CTAAccent>
            <CTATitle>Entrena, compite y construye historia con nosotros.</CTATitle>
            <CTAText>
              Si tu sueño es vestir nuestros colores, estar más cerca del staff o impulsar el club desde la grada, tenemos un espacio diseñado para ti.
            </CTAText>
            <CTAButtons>
              <FilledButton to="/form">Aplicar a pruebas</FilledButton>
              <OutlineButton to="/login">Acceso socios</OutlineButton>
            </CTAButtons>
          </CTAContent>
          <CTAVisual
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <CTALogo src={escudo} alt="Escudo Salgar Dorada FC" />
          </CTAVisual>
        </CTASection>
      </ScrollRevealSection>

      <ScrollRevealSection {...revealProps}>
        <SliderSection>
          <SectionHeading>
            <Accent>Momentos destacados</Accent>
            <SectionTitle>Historias que marcan el presente del club.</SectionTitle>
            <SectionLead>
              Explora nuestra identidad visual, la energía en las gradas y la tecnología que impulsa cada semana de trabajo.
            </SectionLead>
          </SectionHeading>
          <SliderContainer>
            <SliderViewport>
              <AnimatePresence mode="wait">
                <SliderItem
                  key={currentSlide}
                  initial={{ opacity: 0, x: direction === 1 ? 120 : -120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 1 ? -120 : 120 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <SliderImage src={currentSlideData.image} alt={currentSlideData.title} />
                  <SliderDetails>
                    <SliderLabel>{currentSlideData.label}</SliderLabel>
                    <SliderTitle>{currentSlideData.title}</SliderTitle>
                    <SliderText>{currentSlideData.text}</SliderText>
                  </SliderDetails>
                </SliderItem>
              </AnimatePresence>
            </SliderViewport>
            <SliderControls>
              <ControlButton type="button" aria-label="Slide anterior" onClick={() => goToSlide(-1)}>
                <span aria-hidden>←</span>
              </ControlButton>
              <ControlButton type="button" aria-label="Slide siguiente" onClick={() => goToSlide(1)}>
                <span aria-hidden>→</span>
              </ControlButton>
            </SliderControls>
          </SliderContainer>
        </SliderSection>
      </ScrollRevealSection>
    </Main>
  );
};
