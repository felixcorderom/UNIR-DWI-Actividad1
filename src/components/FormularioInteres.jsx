import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/FormularioInteres.scss";

function FormularioInteres() {
  const { curso } = useParams(); // HOOK
  const navigate = useNavigate(); // HOOK

  const nombreCurso = {
    excel: "Especialización en Excel",
    python: "Especialización en Python",
    "ciencias-datos": "Especialización en Ciencias de Datos"
  }[curso] || "Especialización";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ventana emergente
    if (window.confirm("✅ Pronto un asesor te contactará. ¿Desea volver al inicio?")) {
      navigate("/"); // Redirección a Home
    }
  };

  return (
    <section className="formulario-interes">
      <h2>Solicitá información sobre la {nombreCurso}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="tel" placeholder="Teléfono" />
        <select defaultValue={curso}>
          <option value="">Seleccione una especialización</option>
          <option value="excel">Especialización en Excel</option>
          <option value="python">Especialización en Python</option>
          <option value="ciencias-datos">Especialización en Ciencias de Datos</option>
        </select>
        <textarea placeholder="¿En qué podemos ayudarte?" rows={4}></textarea>
        <button type="submit">Enviar información</button>
      </form>
    </section>
  );
}

export default FormularioInteres;
