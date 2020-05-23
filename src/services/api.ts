import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.2.2:3333',
  baseURL: 'http://localhost:3333',
  // baseURL: 'https://corpus.serveo.net/',
});

export default api;
