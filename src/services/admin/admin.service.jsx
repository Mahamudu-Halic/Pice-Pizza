import axios from "axios";

// * sever url
const url = import.meta.env.VITE_SERVER_URL;

/**
 * @function requestIngredients
 * @description Get request for all ingredients
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestIngredients = () => {
  return axios.get(`${url}/admin/ingredient`);
};

/**
 * @function requestPostIngredients
 * @description Post request to add ingredients to the database.
 * This function sends a POST request to the server with an array of objects containing the ingredient name and price.
 * The request returns a Promise with a response object from the server.
 * @param {Object[]} ingredients - An array of objects containing the ingredient name and price
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestPostIngredients = (ingredients) => {
  return axios.post(`${url}/admin/ingredient`, ingredients);
};

/**
 * @function requestFood
 * @description Get request for all food menu
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestFood = () => {
  return axios.get(`${url}/admin/food`);
};

/**
 * @function requestPostFood
 * @description Post request to add a food menu item to the database.
 * This function sends a POST request to the server with an object containing the food item details.
 * The request returns a Promise with a response object from the server.
 * @param {Object} food - An object containing the food item details (name, description, price, image)
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestPostFood = (food) => {
  return axios.post(`${url}/admin/food`, food);
};

/**
 * @function requestOrders
 * @description Get request for all orders made by users
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestOrders = () => {
  return axios.get(`${url}/admin/order`);
};

/**
 * @function requestUserOrder
 * @description Get request for specific user order
 * @param {string} email - user's email
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestUserOrder = (email) => {
  return axios.get(`${url}/user/order/${email}`);
};

/**
 * @function requestUserOrderItems
 * @description Get request for specific user order items
 * @param {string} id - The id of the order to fetch the items for
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestUserOrderItems = (id) => {
  return axios.get(`${url}/user/order/items/${id}`);
};

// TODO: post request to update order status
/**
 * @function requestUpdateOrderStatus
 * @description Post request to update order status
 * @param {Object} status - The order status to update
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestUpdateOrderStatus = (status) => {
  return axios.post(`${url}/admin/order/status`, status);
};

/**
 * @function requestUpdateIngredientPrice
 * @description Put request to update ingredient price
 * @param {Object} ingredient - The ingredient to update
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestUpdateIngredientPrice = (ingredient) => {
  return axios.put(`${url}/admin/ingredient`, ingredient);
};

/**
 * @function requestUpdateMenu
 * @description Put request to update menu
 * @param {Object} food - The menu item to update
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestUpdateMenu = (food) => {
  return axios.put(`${url}/admin/food`, food);
};
/**
 * @function requestRegisterAdmin
 * @description Post request to add a new admin {name and email}
 * @param {Object} admin - The admin data to add
/**
 * @function requestRegisterAdmin
 * @description Post request to add a new admin {name and email}
 * @param {Object} admin - The admin data to add
 * @param {string} admin.name - The name of the admin
 * @param {string} admin.email - The email of the admin
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestRegisterAdmin = (admin) => {
  return axios.post(`${url}/admin/register-admin`, admin);
};

/**
 * @function requestAdmins
 * @description Get request to fetch all admins
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestAdmins = () => {
  return axios.get(`${url}/admin/admin`);
};

/**
 * @function requestIsAdmin
 * @description Get request to check if a user is an admin
 * @param {string} email - The email of the user
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */
export const requestIsAdmin = (email) => {
  return axios.get(`${url}/admin/admin-status/${email}`);
};
/**
 * @function requestIsAdmin
 * @description Get request to check if a user is an admin
 * @param {string} email - The email of the user
 * @returns {Promise<AxiosResponse<any>>} - Promise with a response object
 */

export const requestToggleMenu = (status) => {
  return axios.post(`${url}/admin/toggle/food`, status);
};

// TODO: POST REQUEST TO Toggle INGREDIENT
export const requestToggleIngredients = (status) => {
  return axios.post(`${url}/admin/toggle/ingredient`, status);
};

export const requestDeleteMenu = (id) => {
  return axios.delete(`${url}/admin/food/${id}`);
};
