import ProductItem from "./ProductItem";
import "../Styles/ProductList.css";

export default function ProductList({ products, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="product-list-container">
      {products.length === 0 ? (
        <p className="no-products-message">No hay productos en el inventario.</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
}