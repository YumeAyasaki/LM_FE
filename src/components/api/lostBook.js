import { baseURL, post } from "./generic.js";

const model = "LostBook";

const lostBookAPI = {
  create: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
};

export default lostBookAPI;
