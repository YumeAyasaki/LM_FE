import { baseURL, del, get, post, put } from "./generic.js";

const model = "Reader";

const readerAPI = {
  create: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
  getReaderById: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return get(url, token);
  },

  update: (id, data, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return put(url, data, token);
  },
  deleteReader: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return del(url, token);
  },
};

export default readerAPI;
