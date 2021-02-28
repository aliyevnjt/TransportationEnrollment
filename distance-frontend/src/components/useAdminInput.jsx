import { useState } from 'react';

const useAdminInput = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs)
    }
  };
  const handleInputChange = (event) => {
    setInputs(() => ({ ...inputs, [event.target.id]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useAdminInput;
