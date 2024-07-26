import axios from "axios";

const url = import.meta.env.VITE_PUBLIC_URL;

export const requestIngredients = () => {
  return axios.get(`${url}/admin/ingredient`);
};

export const requestPostIngredients = (ingredients) => {
  return axios.post(`${url}/admin/ingredient`, {
    ingredients,
  });
};
