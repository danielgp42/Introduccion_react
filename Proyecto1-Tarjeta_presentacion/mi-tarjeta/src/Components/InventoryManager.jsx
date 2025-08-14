import { useReducer, useCallback, useState, useMemo } from "react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";
import "../Styles/InventoryManager.css";

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { 
        products: [...state.products, { 
          id: Date.now(), 
          name: action.name, 
          quantity: action.quantity || 1 
        }] 
      };
    case "increment":
      return { 
        products: state.products.map(p =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ) 
      };
    case "decrement":
      return { 
        products: state.products.map(p =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        ) 
      };
    case "remove":
      return { 
        products: state.products.filter(p => p.id !== action.id) 
      };
    default:
      return state;
  }
}

export default function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return state.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [state.products, searchTerm]);

  // useCallback para memoizar las funciones de dispatch
  const handleAddProduct = useCallback((productName) => {
    dispatch({ type: "add", name: productName });
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  return (
    <div className="inventory-manager">
      <h1>Gestor de Inventario 🛍️</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ProductList 
        products={filteredProducts} 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />
    </div>
  );
}
