import { baseURL, post } from "./generic.js";

const model = "LiquidatedBook";

const liquidatedBookAPI = {
  create: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
};

export default liquidatedBookAPI;
