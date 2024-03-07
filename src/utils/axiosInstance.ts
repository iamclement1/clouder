import axios, { AxiosInstance } from "axios";
import { getStorageAuthItems } from "./lib";

// Create an Axios instance with default headers
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

//Interceptor for handling requests globally
api.interceptors.request.use(
  (config) => {
    // Do something before the request is sent
    const { token } = getStorageAuthItems();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      // If there is no token, remove the Authorization header
      delete config.headers["Authorization"];
    }
    // ... rest of the interceptor logic
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errConfig = error.config;
    if (error.response && error.response.status === 401 && !errConfig._retry) {
      errConfig._retry = true;
      try {
        const { refreshToken } = getStorageAuthItems();
        const response = await api.post("/auth/refresh", {
          refresh: refreshToken,
        });

        const accessToken = response?.data?.accessToken?.access;

        const token = accessToken;

        if (token) {
          sessionStorage.setItem("token", token);
          errConfig.headers["Authorization"] = `Bearer ${token}`;
          return api(errConfig); // Retry the original request with the new token
        } else {
          // Handle the case where no new token is received
          throw new Error("No new token received");
        }
      } catch (error) {
        console.error("Token refresh failed:", error);
        // Handle token refresh failure
        throw error;
      }
    }
    if (error.response.status === 500) {
      error.response.data.message = "Something went wrong. Please try again!";
    }

    return Promise.reject(error);
  },
);

export default api;
