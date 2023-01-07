import { baseURL, get, post, put } from "./generic.js";

const model = "BookLoan";

const bookLoanAPI = {
  viewByReaderId: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return get(url, token);
  },
  loan: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
  returnBook: (id, data, token) => {
    const url = `${baseURL}/${model}`;
    return put(url, data, token);
  },
};

export default bookLoanAPI;
