import React from 'react';

export default ({ product, onRemove }) => (
  <div key={product.id} className="itemCarrinho">
    <img
      width="100"
      src={require(`../assets/images/${product.image}`)}
      alt={product.title}
      className='img_item'

    />
    <h4>{product.name}</h4>
    <p>{product.price}</p>

    <button onClick={() => onRemove(product)} className='btn-remover'> Remover</button>
  </div>
);
