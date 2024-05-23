import axios from "axios";
export const url="http://localhost:3009"


const token = localStorage.getItem("token");
export const baseUrl = axios.create({
  baseURL: "http://localhost:3009", 
  headers: {
    token: `${token}`,
  },
});

export const baseUrlForm = axios.create({
  baseURL: "http://localhost:3009",
  headers: {
    token: `${token}`,
    "content-type": "multipart/form-data",
  },
});