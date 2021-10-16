import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const signUpUser = async ({first_name, last_name, email, password}) => {
  return axios.post(`${API_URL}auth/signup`, {
    first_name,
    last_name,
    email,
    password,
  });
};

export const signInUser = async ({email, password}) => {
  return await axios.post(`${API_URL}auth/signin`, {
    email,
    password,
  }).then(res => res.data);
};
