import axios from "axios";
import { getCookie } from "cookies-next";

const client = axios.create({
  baseURL: "https://clouder-lkvb.onrender.com",
  timeout: 36000,
});

// Add a request interceptor
client.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const token = await getCookie("userToken");
    console.log("user token is set", token);
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    // if (error.response && error.response.status === 401) {
    //   // delete token from session storage
    // }

    // if (error.response.status === 500) {
    //   error.response.data.message = 'Something went wrong, Please try again!';
    // }
    return Promise.reject(error);
  },
);

export default client;
