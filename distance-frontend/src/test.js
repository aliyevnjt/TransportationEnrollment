const axios = require('axios');

const studentApi = async () => axios.create({
  baseURL: 'http://ec2-3-23-113-213.us-east-2.compute.amazonaws.com:8080/',
});

async function getData() {
  const baseURL = 'http://ec2-3-23-113-213.us-east-2.compute.amazonaws.com:8080/';
  // const res = await studentApi.post('/student', {
  //   city: 'MEDFORD',
  // });
  // const res = await axios.get(`${baseURL}student`, {
  //   // city: 'MEDFORD',
  //   timeout: 3000,
  // });
  const res = await axios.post(`${baseURL}student`, {
    fname: '',
    lname: '',
    grade: '',
    school: '',
    enrollmentStatus: '',
  });
  console.log(res);
}

getData();
