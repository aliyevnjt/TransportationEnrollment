import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../data/Data';
import constructAdminTable from './toolbox/ConstructAdminTable';

const getAddresses = () => {
    const res = await axios.post(`${baseURL}/addresses/`);
    console.log(res);


}