import HeroSection from '../components/HeroSection';
import img_Oficina from "../assets/img_Oficina.png";
import EspecializacionCard from "../components/EspecializacionCard";
import excelImg from "../assets/excelImg.jpg";
import datosImg from "../assets/datosImg.jpg";
import pythonImg from "../assets/pythonImg.jpg";
import FormularioContacto from "../components/FormularioContacto";
import BienvenidaModal from "../components/BienvenidaModal";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <main>
      <HeroSection />

      <BienvenidaModal />

      {/* Sección Imagen + Texto */}
      <section className="especializaciones__contenido">
        <div className="especializaciones__imagen">
          <img src={img_Oficina} alt="Personas en oficina" />
        </div>
        <div className="especializaciones__texto">
          <h3>Desarrolla habilidades y destrezas con nuestras especializaciones</h3>
          <p>
            ¿Qué crees que es mejor recibir después de cada lección: una hermosa
            insignia o habilidades importantes que puedes poner en práctica de inmediato?
            Piénsalo.
          </p>
          <ul>
            <li>Inicia desde $60 mensuales</li>
            <li>Enseñanza en línea</li>
            <li>Certificado de finalización</li>
            <li>Acceso a nuestra plataforma 24/7</li>
          </ul>
          <button className="especializaciones__boton">
            Sí, deseo iniciar una especialización
          </button>
        </div>
      </section>

      <section className="especializaciones">
        <h2 className="especializaciones__titulo">Nuestras Especializaciones</h2>
      </section>

      {/* Sección de las Cards de la Especializaciones */}
      <section className="tarjetas">
        <EspecializacionCard
          titulo="Especialización en Excel"
          imagen={excelImg}
        />
        <EspecializacionCard
          titulo="Especialización en Ciencias de Datos"
          imagen={datosImg}
        />
        <EspecializacionCard
          titulo="Especialización en Python"
          imagen={pythonImg}
        />
      </section>
      <FormularioContacto />      
      <ScrollToTop />
    </main>
  );
}

export default Home;