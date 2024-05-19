// InputComponent2.jsx
import React, { useContext, useState } from 'react';
import { FormDataContext } from './FormDataContext';

const InputComponent2 = () => {
  const { updateFormData } = useContext(FormDataContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    updateFormData({ input2: value });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Input 2"
      />
    </div>
  );
};

export default InputComponent2;