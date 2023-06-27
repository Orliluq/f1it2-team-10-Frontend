import axios from 'axios';

const api = axios.create({
  baseURL: 'https://citasync.onrender.com/api/citas',
});

export default api;

