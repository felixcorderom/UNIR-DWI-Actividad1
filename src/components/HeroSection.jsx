import '../styles/hero.scss';
import heroImage from '../assets/hero-server.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Destaca en IT con Nuestras <br />
          <strong>Especializaciones de Alto Nivel</strong>
        </h1>
        <p className="hero__subtitle">
          Aprende las habilidades tecnológicas más demandadas con nuestras Especializaciones
        </p>
        <a
          href="https://wa.me/50688687002"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__cta"
        >
          <i className="hero__cta-icon"></i> Contactar Asesor
        </a>
      </div>

      <div className="hero__right">
        <img src={heroImage} alt="Hero" className="hero__image" />
      </div>
    </section>
  );
}

export default HeroSection;