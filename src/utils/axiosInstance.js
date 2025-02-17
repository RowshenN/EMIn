import axios from "axios";
// import { token } from "./token";

const BASE_URL = "https://eminhyzmat.com:4443/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,

  headers: {
    // Authorization: "Bearer " + token(),
    "Accept": "application/json",
    // Accept: "*/*",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});

export { BASE_URL, axiosInstance };
