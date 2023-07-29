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
      .catch(() => {
        reject();
      });
  });
};
