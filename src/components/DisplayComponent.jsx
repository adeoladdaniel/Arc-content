// DisplayComponent.jsx
import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';

const DisplayComponent = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <div>
      <h3>Form Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default DisplayComponent;