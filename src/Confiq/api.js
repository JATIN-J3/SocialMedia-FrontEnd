import axios from "axios";
const jwtToken = localStorage.getItem("jwt")
export const API_BASE_URL = 'https://socialmediabackend-production-2c2c.up.railway.app/';


export const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Authorization':`Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  },  
});
