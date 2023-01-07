import { ApiCore } from "./core";

// Book API

const url = "Book";

// plural and single may be used for message logic if needed in the ApiCore class.

const bookApi = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: false,
  delete: false,
  url: url,
});

bookApi.massUpdate = () => {
  // Add custom api call logic here
};

export default bookApi;
