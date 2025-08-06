import { useRef } from "react";
import "../Styles/AddProductForm.css";

export default function AddProductForm({ onAddProduct }) {
  const inputRef = useRef(null);

  const handleAddProductClick = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      onAddProduct(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleAddProductClick}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto"
        className="product-input"
      />
      <button type="submit" className="add-button">
        Agregar Producto
      </button>
    </form>
  );
}