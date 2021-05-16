import axios from 'axios';

const getAdminSettings = async () =>{
  const baseURL = process.env.REACT_APP_BASE_URL;
  try {
    const res = await axios.get(`${baseURL}/adminSettings`);
    const currentData = res.data.filter((obj) => obj.activeInd === 'Y');
    const adminSettings = currentData[0];
    return adminSettings;
  } catch (err) {
    console.log(err);
    return ''
  }
}

export {getAdminSettings};