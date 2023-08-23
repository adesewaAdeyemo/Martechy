import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:8000",
  headers: {
    Authorization: "Bearer YourAccessToken",
  },
});

const AxiosPlugin = {
  install: (app) => {
    app.config.globalProperties.$axios = axiosInstance;
  },
};

export default AxiosPlugin;
