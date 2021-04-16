import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// axiosInstance.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
// axiosInstance.defaults.headers.get["token"] = localStorage.getItem("token");

// request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    console.log(token);
    if (config.method === "get") {
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["token"] = token !== null ? token : token;
      console.log(config);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (err) {
    const errMsg =
      err.response.data.msg !== undefined ? err.response.data.msg : err.response.data.errors[0].msg;
    console.log(errMsg);
    return Promise.reject(err);
  }
);

export default axiosInstance;
