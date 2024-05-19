// InputComponent1.jsx
import React, { useContext, useState } from 'react';
import { FormDataContext } from './FormDataContext';

const InputComponent1 = () => {
  const { updateFormData } = useContext(FormDataContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    updateFormData({ input1: value });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Input 1"
      />
    </div>
  );
};

export default InputComponent1;