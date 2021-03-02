import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { studentApi as api} from '../api/studentApi'

const useAdminInput = (callback) => {
  const [inputs, setInputs] = useState({"schoolYear":"FY22"});
//  const [history, setHistory] = useState({});
  let history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
      if (event.target.id === 'registrationForm') {
        try {
          // const baseURL = 'http://ec2-3-23-113-213.us-east-2.compute.amazonaws.com:9090/student/request';
          // const api = axios.create({
          //   baseURL,
          // });
          const res = await api.post('/student', inputs);
          console.log(res);
          if (res.data.enrollmentStatus === 'free') {
            // setHistory({
            //   pathname: '/freeReg',
            //   search: '',
            //   state: { detail: res.data },
            //   student: res.data,
            // });
            history.push({
              pathname: "/freeReg",
              search: "",
              state: { detail: res.data },
              student: res.data,
            });
          } else {
          //   setHistory({
          //     pathname: '/payment',
          //     search: '',
          //     state: { detail: res.data },
          //     student: res.data,
          //   });
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
    history,
    
  };
};

export default useAdminInput;
