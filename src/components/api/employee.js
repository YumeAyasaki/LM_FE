import { baseURL, del, get, post, put } from "./generic.js";

const model = "Employee";

const employeeAPI = {
  create: (data, token) => {
    const url = `${baseURL}/${model}`;
    return post(url, data, token);
  },
  getEmployeeByName: (name, token) => {
    const url = `${baseURL}/${model}/?name=${name}`;
    return get(url, token);
  },
  getEmployeeByDepartment: (department, token) => {
    const url = `${baseURL}/${model}/department/${department}`;
    return get(url, token);
  },

  update: (id, data, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return put(url, data, token);
  },
  deleteEmployee: (id, token) => {
    const url = `${baseURL}/${model}/${id}`;
    return del(url, token);
  },
};

export default employeeAPI;
