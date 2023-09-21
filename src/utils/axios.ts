import axios, { AxiosError, AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";

const apiURL = "https://clouder-lkvb.onrender.com";

const client = axios.create({
  baseURL: "https://clouder-lkvb.onrender.com",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;

// Add a request interceptor
client.interceptors.request.use(
  (config) => {
    const userToken = getCookie("token");
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status || 500;
    //Global errors are handled here:
    if (status === 401) {
      if (isRefreshing) {
        isRefreshing = true;

        // Send a request to refresh the access token using the refresh token
        const refreshToken = getCookie("refreshToken");
        try {
          //made a request to refresh the access token
          const response = await axios.post(
            `${apiURL}/auth/refresh`,
            refreshToken,
          );

          const newRefreshToken = response.data.refresh;

          //update the user token with the new refresh token
          const userToken = setCookie("token", newRefreshToken);
          console.log(userToken);
          //TODO: check how to add the refresh token to the headers
          // Update the Authorization header in the Axios client with the new token
        } catch (error) {
          console.log(error);
        } finally {
          isRefreshing = false;
        }
      }
    } else {
      switch (status) {
        //forbidden: permission issue
        case 403:
          return "Forbidden";
          break;
        //not found
        case 404:
          return "Not Found";
          break;
        case 409:
          return "Conflicted Request";
          break;
        case 422:
          return "Could not process request";
          break;
        //server errorr
        case 500:
          return "Internal Server Error";
          break;
        //default error
        default:
          return Promise.reject(error);
      }
    }
  },
);

export default client;
