import axios, { AxiosInstance } from "axios";
import { getStorageAuthItems } from "./lib";

// Create an Axios instance with default headers
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  // timeout: 60000,
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
      // Use a conditional check to ensure token is not null
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Ensure the request method is one of the allowed methods
    if (
      config.method &&
      !["GET", "PUT", "POST", "PATCH", "OPTIONS", "DELETE", "HEAD"].includes(
        config.method.toUpperCase(),
      )
    ) {
      const errorMessage = `Invalid request method: ${config.method}`;
      return Promise.reject(new Error(errorMessage));
    }

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
        const refreshTokenResponse = await api.post(
          "/auth/refresh",
          refreshToken,
        );
        const { jwtToken, refreshToken: resToken } =
          refreshTokenResponse.data.data;

        sessionStorage.setItem("token", jwtToken);
        sessionStorage.setItem("refresh", resToken);

        // api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
        errConfig.headers["Authorization"] = `Bearer ${jwtToken}`;

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
