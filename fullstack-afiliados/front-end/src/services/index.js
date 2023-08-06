import  jwt_decode from 'jwt-decode';
import axios from "axios";
import { BASE_URL } from "../constants";

const setHeaders = (ContentTYpe) => {
  const content_type = {
    formData: "multipart/form-data",
    json: "application/json",
  };
  return {
    headers: {
      Authorization: getToken(),
      "Content-Type": content_type[ContentTYpe],
    },
  };
};

const setToken = (token) => {
  return window.localStorage.setItem('token', token)
}

const getToken = () => {
  return window.localStorage.getItem('token')
}

export const removeToken = () => {
  return window.localStorage.removeItem('token')
}

export const getTokenData = () => {
  const token = getToken()
  const {payload} = jwt_decode(token)
  return payload
}

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/uploadFile`, file, setHeaders('formData'))
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
      .get(`${BASE_URL}/sellers`, setHeaders('json'))
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const registerUser = (body) => {
  console.log('resgtister');
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/users`, body, setHeaders('json'))
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const login = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/auth`, body, setHeaders('json'))
      .then((res) => {
        setToken(res.data.token)
        resolve();
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
