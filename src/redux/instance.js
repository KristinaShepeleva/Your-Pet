import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yourpet-app-backend.onrender.com',
});

export default instance;
