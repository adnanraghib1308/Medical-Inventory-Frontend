import axios from "axios";
import { getJwtToken } from "../../helpers/jwt";

const API_URL = "http://localhost:8000/api/";

export const getAllSalesData = async () => {
  return axios
    .get(`${API_URL}sales/`, {
      headers: {
        token: `Bearer ${getJwtToken()}`,
      },
    })
    .then((res) => res.data);
};
