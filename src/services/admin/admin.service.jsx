import axios from "axios";

// * sever url
const url = import.meta.env.VITE_SERVER_URL;

// * get request for all ingredients
export const requestIngredients = () => {
  return axios.get(`${url}/admin/ingredient`);
};

// * post request for ingredients
export const requestPostIngredients = (ingredients) => {
  return axios.post(`${url}/admin/ingredient`, ingredients);
};

// * get request for all food menu
export const requestFood = () => {
  return axios.get(`${url}/admin/food`);
};

// * post request for food menu
export const requestPostFood = (food) => {
  return axios.post(`${url}/admin/food`, food);
};

// * get request for user orders
export const requestOrders = () => {
  return axios.get(`${url}/admin/order`);
}

// TODO: get request for specific user order
export const requestUserOrder = (email) => {
  return axios.get(`${url}/user/order/${email}`)
}

// TODO: get request for specific user order items
export const requestUserOrderItems = (id) => {
  return axios.get(`${url}/user/order/items/${id}`)
}


// TODO: post request to update order status
export const requestUpdateOrderStatus = (status) => {
  return axios.post(`${url}/admin/order/status`, status)
}

// TODO: put request to update ingredient price
export const requestUpdateIngredientPrice = (ingredient) => {
  return axios.put(`${url}/admin/ingredient`, ingredient)
}

// TODO: put request to update menu
export const requestUpdateMenu = (food) => {
  return axios.put(`${url}/admin/food`, food)
}

// TODO: post request to add admins {name and email}
export const requestRegisterAdmin = (admin) => {
  return axios.post(`${url}/admin/register-admin`, admin)
}

// TODO: get request for admins
export const requestAdmins = () => {
  return axios.get(`${url}/admin/admin`)
}

// TODO: get request for isAdmin
export const requestIsAdmin = (email) => {
  return axios.get(`${url}/admin/admin-status/${email}`)
}

// TODO: POST REQUEST TO TOGGLE MENU
export const requestToggleMenu = status => {
  return axios.post(`${url}/admin/toggle/food`, status)
}

// TODO: POST REQUEST TO Toggle INGREDIENT
export const requestToggleIngredients = status => {
  return axios.post(`${url}/admin/toggle/ingredient`, status)
}

export const requestDeleteMenu = id => {
  return axios.delete(`${url}/admin/food/${id}`)
}
