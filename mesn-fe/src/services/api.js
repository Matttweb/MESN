import axios from "axios";
import { apiURL } from "../store";

let baseURL = "";

apiURL.subscribe((value) => {
  baseURL = value;
});

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL,
});

// Implement a method to execute all the request from here
const apiRequest = async (method, url, request) => {
  try {
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axiosAPI({ method, url, headers, data: request });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Function to excute the http get request
const get = (url) => apiRequest("get", url);

// Function to excute the http post request
const post = (url, request) => apiRequest("post", url, request);

// Function to excute the http put request
const put = (url, request) => apiRequest("put", url, request);

// Function to excute the http delete request
const deleteRequest = (url) => apiRequest("delete", url);

const API = {
  get,
  post,
  put,
  delete: deleteRequest,
};

export default API;
