import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://indrukabackend-production.up.railway.app',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response?.status === 401) {
    //   // Handle redirect to login page
    //   window.location.href = "/signin";
    // }
    return Promise.reject(error);
  },
);

export default apiClient;
