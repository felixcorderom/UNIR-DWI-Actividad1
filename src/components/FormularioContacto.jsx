import React, { useState } from "react";
import "../styles/FormularioContacto.scss";
import imgEstudiante from "../assets/estudiante.jpg";
import { useNavigate } from "react-router-dom";


const FormularioContacto = () => {
const navigate = useNavigate();

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [mensaje, setMensaje] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();


  if (window.confirm("✅ Pronto un asesor te contactará. ¿Desea volver al inicio?")) {
      // Limpia los campos
      setNombre("");
      setCorreo("");
      setMensaje("");

      // Redirige
      navigate("/");
  }
};

  return (
<section className="contacto">
  <div className="contacto__imagen">
    <img src={imgEstudiante} alt="Estudiante escribiendo" />
  </div>
  <div className="contacto__formulario">
  
  <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    required
  />

  <input
    type="email"
    placeholder="Correo electrónico"
    value={correo}
    onChange={(e) => setCorreo(e.target.value)}
    required
  />

  <textarea
    placeholder="Mensaje"
    value={mensaje}
    onChange={(e) => setMensaje(e.target.value)}
    rows={4}
  />

  <button type="submit">Enviar mensaje</button>
</form>
  </div>
</section>
  );
};

export default FormularioContacto;
