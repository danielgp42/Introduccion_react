import React from 'react';
import '../Styles/ImputNumber.css';

const InputNumber = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="input-number"
      placeholder="Ingresa tu número..."
      min="1"
      max="100"
    />
  );
};

export default InputNumber;