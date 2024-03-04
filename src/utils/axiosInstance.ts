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

        // Use Axios to make a request to refresh the token
        const {
          data: { accessToken },
        } = await api.post("/auth/refresh", {
          refresh: refreshToken,
        });

        const token = accessToken?.access;
        const refresh = accessToken?.refresh;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("refresh", refresh);

        // Uncomment the following line to update the Authorization header in errConfig
        errConfig.headers["Authorization"] = `Bearer ${token}`;

        // Retry the original request
        return api(errConfig);
      } catch (error) {
        console.log(error);
      }
    }
    if (error.response.status === 500) {
      error.response.data.message = "Something went wrong. Please try again!";
    }

    return Promise.reject(error);
  },
);

export default api;
