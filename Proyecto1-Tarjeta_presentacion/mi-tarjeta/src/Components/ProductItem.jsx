import React from "react";
import "../Styles/ProductItem.css";

function ProductItem({ product, onIncrement, onDecrement, onRemove }) {
  return (
    <li className="product-item">
      <span className="product-name">{product.name}</span>
      <span className="product-quantity">Cantidad: {product.quantity}</span>
      <div className="action-buttons">
        <button onClick={() => onIncrement(product.id)}>+</button>
        <button onClick={() => onDecrement(product.id)}>-</button>
        <button className="remove-button" onClick={() => onRemove(product.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default React.memo(ProductItem);