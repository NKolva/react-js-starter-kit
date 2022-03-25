import axios from 'axios';
import { BASE_API_URL } from 'src/constants/env';

const axiosClient = axios.create({
  baseURL: BASE_API_URL,
});

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export const get = (URL) => {
  return axiosClient.get(`${URL}`).then((response) => response);
};

export const post = (URL, payload) => {
  return axiosClient.post(`${URL}`, payload).then((response) => response);
};

export const patch = (URL, payload) => {
  return axiosClient.patch(`${URL}`, payload).then((response) => response);
};

export const _delete = (URL) => {
  return axiosClient.delete(`${URL}`).then((response) => response);
};

const apiClient = {
  post,
  get,
  patch,
  _delete,
};

export { apiClient };
