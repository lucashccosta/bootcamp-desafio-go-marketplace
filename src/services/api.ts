import axios from 'axios';

const api = axios.create({
  baseURL: 'https://f0d799603afd.ngrok.io',
});

export default api;
