import axios from 'axios';

const client = axios.create({
  baseURL: '', // Uses Vite proxy - routes /auth/* and /health to the backend
});

// Request interceptor to add the auth token to headers
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - just pass through responses and rejections
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
