import axios from "axios";
import { BASE_URL } from "../constants";

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/uploadFile`, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const fetchSellers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/sellers`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data)
      });
  });
};
