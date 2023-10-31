import axios, { AxiosInstance } from "axios";
import { getStorageAuthItems } from "./lib";

// Create an Axios instance with default headers
const api: AxiosInstance = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
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
    const { token } = getStorageAuthItems();
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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errConfig = error.config;
    if (error.response && error.response.status === 401 && !errConfig._retry) {
      errConfig._retry = true;
      try {
        const { refresh } = getStorageAuthItems();

        // Use Axios to make a request to refresh the token
        const refreshTokenResponse = await api.post("/auth/refresh", refresh);
        const { jwtToken, refreshToken: resToken } =
          refreshTokenResponse.data.data;

        sessionStorage.setItem("token", jwtToken);
        sessionStorage.setItem("refresh", resToken);

        api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

        // Retry the original request
        return api(errConfig);
      } catch (error) {
        console.log(error);
      }
    }
    if (error.response.status === 500) {
      error.response.data.message = "Something went wrong, Please try again!";
    }

    return Promise.reject(error);
  },
);

export default api;
