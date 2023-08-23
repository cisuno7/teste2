import axios from 'axios';

const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
});

export default api;
