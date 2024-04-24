import axios from 'axios';
const baseURL = 'https://ai-verse-backend.vercel.app/v1';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
