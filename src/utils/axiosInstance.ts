import axios, { AxiosInstance } from "axios";

// Create an Axios instance with default headers
const api: AxiosInstance = axios.create({
  baseURL: "https://clouder-lkvb.onrender.com",
  // timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

//Interceptor for handling requests globally

api.interceptors.request.use(
  (config) => {
    // Do something before the request is sent
    const token = sessionStorage.getItem("token");
    if (token) {
      // Use a conditional check to ensure token is not null
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptors for handling response globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
