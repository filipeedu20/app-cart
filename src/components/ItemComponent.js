import React from "react";
import { Link } from "react-router-dom";

export default ({ product }) => {
  return (
    <div className="exibe_produto">      
      <img
        src={require(`../assets/images/${product.image}`)}
        alt={product.title}
      />
      <h3>{product.title}</h3>      
        <b>Preço:</b>{product.price}      
      <p>
        <Link to={`/product/${product.id}`} className="btn-visualizar">Visualizar</Link>
      </p>
    </div>
  );
};