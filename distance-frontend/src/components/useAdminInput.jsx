import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../data/Data';
import constructAdminTable from './toolbox/ConstructAdminTable';

const useAdminInput = () => {
  const [inputs, setInputs] = useState([{ schoolYear: 'FY22' }]);
  const [table, setTable] = useState();
  const [adminSearchData, setAdminSearchData] = useState([{}]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
      if (event.target.id === 'registrationForm') {
        try {
          console.log(inputs);
          const res = await axios.post(`${baseURL}/student/`, inputs);
          console.log(res);
          if (res.data.enrollmentStatus === 'free') {
            history({
              pathname: '/freeReg',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          } else {
            history({
              pathname: '/payment',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          }
        } catch (err) {
          console.log(err);
        }
      } else if (event.target.id === 'adminForm') {
        console.log(event);
        const res = await axios.post(`${baseURL}/student/request/`, inputs[0]);
        console.log(res.data);
        setTable(constructAdminTable(res.data));
        setAdminSearchData(res.data);
      }
    }
  };
  const handleInputChange = (event) => {
    const counter = parseInt(event.target.parentElement.parentElement.getAttribute('counter'));
    console.log('counter:', counter);
    console.log('inputs:', inputs);

    setInputs(() => (inputs.map((currentStudent, index) => {
      console.log('index:', index);
      console.log('inputObj:', currentStudent);
      console.log('EQUAL?:', index === counter);

      if (index === counter) {
        console.log('INSIDEinputObj:', currentStudent);
        return {
          ...currentStudent,
          [event.target.id]: event.target.value,
        };
      }
      return currentStudent;
    })));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs,
    history,
    adminSearchData,
    table,
  };
};

export default useAdminInput;
