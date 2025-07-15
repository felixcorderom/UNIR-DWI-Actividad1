import React from "react";
import "../styles/RedesSociales.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaCheck,
  FaEnvelopeOpenText,
} from "react-icons/fa";

function RedesSociales() {
  return (
    <section className="redes">
      <div className="redes__col">
        <h4>Redes Sociales</h4>
        <div className="redes__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      <div className="redes__col">
        <h4>Menú Políticas</h4>
        <ul>
          <li><FaCheck /> <a href="/aviso-legal">Aviso Legal</a></li>
          <li><FaCheck /> <a href="/cookies">Política de Cookies</a></li>
          <li><FaCheck /> <a href="/privacidad">Política de Privacidad</a></li>
        </ul>
      </div>

      <div className="redes__col">
        <h4>Subscríbete ahora</h4>
        <form className="redes__subscribe" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Correo Electrónico" required />
          <button type="submit"><FaEnvelopeOpenText /></button>
        </form>
      </div>
    </section>
  );
}

export default RedesSociales;
