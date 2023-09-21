import axios, { AxiosInstance } from "axios";
// import { getCookie } from "cookies-next";

// const token = getCookie('token');

// Create an Axios instance with default headers
const api: AxiosInstance = axios.create({
  baseURL: "https://clouder-lkvb.onrender.com",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

// Interceptors for handling errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
