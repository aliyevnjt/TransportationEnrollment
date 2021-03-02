import { useState } from 'react';
import axios from 'axios';

const useAdminInput = (callback) => {
  const [inputs, setInputs] = useState({});
  const [history, setHistory] = useState({});

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
      if (event.target.id === 'registrationForm') {
        try {
          const baseURL = 'http://ec2-3-23-113-213.us-east-2.compute.amazonaws.com:9090/student/request';
          const api = axios.create({
            baseURL,
          });
          const res = await api.post('/', inputs);
          if (res.data.enrollmentStatus === 'free') {
            setHistory({
              pathname: '/freeReg',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          } else {
            setHistory({
              pathname: '/payment',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
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
