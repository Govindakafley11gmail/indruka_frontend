import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_EndPoints,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Add this — removes Content-Type for FormData so browser sets multipart + boundary
apiClient.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  // (error) => {
  //   if (error.response?.status === 401) {
  //     window.location.href = "/signin";
  //   }
  //   return Promise.reject(error);
  // },
);

export default apiClient;