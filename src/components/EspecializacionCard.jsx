import React from "react";
import { Link } from "react-router-dom";
import "../styles/EspecializacionCard.scss"; 

function EspecializacionCard({ titulo, imagen }) {
  return (
    <div className="card">
      <img className="card__imagen" src={imagen} alt={titulo} />
      <h4 className="card__titulo">{titulo}</h4>
      <Link to="../components/FormularioInteres" className="card__boton">Más información</Link>
    </div>
  );
}

export default EspecializacionCard;
