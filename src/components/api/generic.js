import axios from "axios";
export const baseURL = import.meta.env.VITE_BACKEND;

export const config = function (token) {
  return {
    headers: {
      token: `${token}`,
    },
  };
};

export const get = function (url, token) {
  return axios
    .get(url, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) return err.message;
      return err.response.data.message;
    });
};

export const post = function (url, data, token) {
  return axios
    .post(url, data, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) return err.message;
      return err.response.data.message;
    });
};

export const put = function (url, data, token) {
  return axios
    .put(url, data, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) return err.message;
      return err.response.data.message;
    });
};

export const patch = function (url, data, token) {
  return axios
    .patch(url, data, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) return err.message;
      return err.response.data.message;
    });
};

export const del = function (url, token) {
  return axios
    .delete(url, config(token))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err.response) return err.message;
      return err.response.data.message;
    });
};
