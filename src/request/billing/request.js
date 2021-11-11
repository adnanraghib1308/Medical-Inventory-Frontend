import axios from "axios";
import { getJwtToken } from "../../helpers/jwt";

const API_URL = "http://localhost:8000/api/";

export const searchProduct = async (searchString) => {
  return axios
    .post(`${API_URL}billing/product-search`, {
      search_string: searchString,
      headers: {
          token: `Bearer ${getJwtToken()}`,
      },
    }).then( res => res.data.data)
};

export const generateFilePath = async (data) => {
  return axios
    .post(`${API_URL}billing/generate-bill`, {
      ...data,
      headers: {
          token: `Bearer ${getJwtToken()}`,
      },
    }).then( res => res.data.file_path)
};