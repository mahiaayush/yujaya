import axios from "axios";

const api = axios.create({
  baseURL: "http://72.61.169.145:5005/"
});

export default api;
