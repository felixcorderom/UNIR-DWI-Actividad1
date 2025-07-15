import React, { useState, useEffect } from "react";
import "../styles/BienvenidaModal.scss";

function BienvenidaModal() {
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMostrar(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!mostrar) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__contenido">
        <h2>¡Bienvenido a Virtualtek Academy! 🎓</h2>
      </div>
    </div>
  );
}

export default BienvenidaModal;
