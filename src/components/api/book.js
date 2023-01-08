import { baseURL, del, get, post, put } from "./generic.js";

const model = "Book";

const bookAPI = {
  create: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
  findById: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return get(url, token);
  },
  findAll: (token) => {
    const url = `${baseURL}/${model}`;
    console.log("Find all");
    return get(url, token);
  },
  findByName: (name, token) => {
    const url = `${baseURL}/${model}/?name=${name}`;
    return get(url, token);
  },
  loan: (id, data, token) => {
    const url = `${baseURL}/${model}/loan/${id}`;
    return put(url, data, token);
  },
  returnBook: (id, data, token) => {
    const url = `${baseURL}/${model}/return/${id}`;
    return put(url, data, token);
  },
  update: (id, data, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return put(url, data, token);
  },
  deleteBook: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return del(url, token);
  },
};

export default bookAPI;
