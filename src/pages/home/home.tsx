import React from "react";
import {
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionProps,
} from "framer-motion";
import { useAppTranslation } from "../../i18n/hooks";
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

const revealProps: MotionProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const Home: React.FC = () => {
  const { t } = useAppTranslation();
  const heroRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);

  // Stats con traducciones
  const stats = [
    { value: "32", label: t('home.stats.talents') },
    { value: "12", label: t('home.stats.staff') },
    { value: "48K", label: t('home.stats.fans') },
  ];

  // Highlight cards con traducciones
  const highlightCards = [
    {
      tag: t('home.highlights.methodology.tag'),
      title: t('home.highlights.methodology.title'),
      description: t('home.highlights.methodology.description'),
      meta: t('home.highlights.methodology.meta'),
      action: { label: t('home.highlights.methodology.action'), to: "/players" },
    },
    {
      tag: t('home.highlights.academy.tag'),
      title: t('home.highlights.academy.title'),
      description: t('home.highlights.academy.description'),
      meta: t('home.highlights.academy.meta'),
      action: { label: t('home.highlights.academy.action'), to: "/form" },
    },
    {
      tag: t('home.highlights.innovation.tag'),
      title: t('home.highlights.innovation.title'),
      description: t('home.highlights.innovation.description'),
      meta: t('home.highlights.innovation.meta'),
      action: { label: t('home.highlights.innovation.action'), to: "/#unete" },
    },
  ];

  // Slider items con traducciones
  const sliderItems = [
    {
      image: sdCasa,
      label: t('home.slider.home_matches.label'),
      title: t('home.slider.home_matches.title'),
      text: t('home.slider.home_matches.text'),
    },
    {
      image: sdVisitante,
      label: t('home.slider.away_style.label'),
      title: t('home.slider.away_style.title'),
      text: t('home.slider.away_style.text'),
    },
    {
      image: sdVisitanteBody,
      label: t('home.slider.training.label'),
      title: t('home.slider.training.title'),
      text: t('home.slider.training.text'),
    },
  ];

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
            {t('home.hero.accent')}
            <span role="presentation">⚡</span>
          </Accent>
          <HeroTitle>{t('home.hero.title')}</HeroTitle>
          <HeroSubtitle>
            {t('home.hero.subtitle')}
          </HeroSubtitle>
          <ButtonRow>
            <FilledButton to="/players">{t('home.hero.knowTeam')}</FilledButton>
            <OutlineButton to="/form">{t('home.hero.joinClub')}</OutlineButton>
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
            <Accent>{t('home.highlights.sectionAccent')}</Accent>
            <SectionTitle>{t('home.highlights.sectionTitle')}</SectionTitle>
            <SectionLead>
              {t('home.highlights.sectionLead')}
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
            <CTAAccent>{t('home.cta.accent')}</CTAAccent>
            <CTATitle>{t('home.cta.title')}</CTATitle>
            <CTAText>
              {t('home.cta.text')}
            </CTAText>
            <CTAButtons>
              <FilledButton to="/form">{String(t('home.cta.applyButton'))}</FilledButton>
              <OutlineButton to="/players">{String(t('home.cta.discoverButton'))}</OutlineButton>
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
            <Accent>{t('home.slider.accent')}</Accent>
            <SectionTitle>{t('home.slider.title')}</SectionTitle>
            <SectionLead>
              {t('home.slider.subtitle')}
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
              <ControlButton type="button" aria-label={String(t('home.slider.previousSlide'))} onClick={() => goToSlide(-1)}>
                <span aria-hidden>←</span>
              </ControlButton>
              <ControlButton type="button" aria-label={String(t('home.slider.nextSlide'))} onClick={() => goToSlide(1)}>
                <span aria-hidden>→</span>
              </ControlButton>
            </SliderControls>
          </SliderContainer>
        </SliderSection>
      </ScrollRevealSection>
    </Main>
  );
};
