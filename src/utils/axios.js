import axios from "axios";

let baseURL = process.env.REACT_APP_BASE_URL;

const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
};

export default axios.create(axiosConfig);
