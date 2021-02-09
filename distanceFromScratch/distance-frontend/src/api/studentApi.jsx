import axios from "axios";
export const studentApi = axios.create({
  baseURL: "http://localhost:8080",
});
