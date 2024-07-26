import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const requestIngredients = () => {
  return axios.get(`${url}/admin/ingredient`);
};

export const requestPostIngredients = (ingredients) => {
  return axios.post(`${url}/admin/ingredient`, ingredients);
};

export const requestFood = () => {
  return axios.get(`${url}/admin/food`);
};

export const requestPostFood = (food) => {
  return axios.post(`${url}/admin/food`, food);
};

export const requestOrders = () => {
  return axios.get(`${url}/user/order`);
}