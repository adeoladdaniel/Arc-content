// import React, { useState, useEffect } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState('');

//   // Load the input value from localStorage when the component mounts
//   useEffect(() => {
//     const storedValue = localStorage.getItem('inputValue');
//     if (storedValue) {
//       setInputValue(storedValue);
//     }
//   }, []);

//   // Handle input change
//   const handleInputChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//     localStorage.setItem('inputValue', newValue);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>Stored Value: {inputValue}</p>
//     </div>
//   );
// }

// export default App;