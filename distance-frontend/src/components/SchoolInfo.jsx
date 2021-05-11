import axios from 'axios';

// const authContext = createContext();
// // FIXME must use this downstream but causes circular dependency
// const useAuthAdminSettings = () => useContext(authContext);

const getSchoolInfo = async () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  // FETCH all admin settings to get current year
  const res = await axios.get(`${baseURL}/adminSettings`);
  const currentData = res.data.filter((obj) => obj.activeInd === 'Y');
  console.log(currentData[0]);
  return {
    adminYear: currentData[0].adminYear,
    schoolYear: '2021-2022'
  };
};
const schoolInfo = getSchoolInfo();
export default schoolInfo;
