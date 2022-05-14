import axios from "axios";

const apiKey = "6279760b4a5ef80e2c0a3b8a";
const version = "v1";
const endpoint = "user";
const baseURL = `https://${apiKey}.mockapi.io/api/${version}/${endpoint}`;
const api = axios.create({
  baseURL,
});

const get = () => api.get();

const add = (data) => api.post({ data });

export { get, add };
