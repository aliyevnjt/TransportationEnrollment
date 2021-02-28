import axios from 'axios';

//http://ec2-3-23-113-213.us-east-2.compute.amazonaws.com:8080/student/request
export const studentApi = axios.create({
  baseURL: 'http://localhost:8080',
});
