import axios from "axios";
import { getJwtToken } from "../../helpers/jwt";

const API_URL = "http://localhost:8000/api/";

export const addProductData = async (productData) => {
  return axios
    .post(`${API_URL}inventory/`, productData, {
      headers: {
        token: `Bearer ${getJwtToken()}`,
      },
    })
    .then((res) => res.data);
};

export const getAllProducts = async () => {
    return axios.get( `${API_URL}inventory/`, {
        headers: {
          token: `Bearer ${getJwtToken()}`,
        }
    }).then(res => res.data);
}
