import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

//* post users order to database
export const requestPostUserOrder = (order) => {
  return axios.post(`${url}/user/order`, order);
};

//*   fetch order using email
export const requestViewUserOrder = (email) => {
  return axios.get(`${url}/user/order/${email}`);
};

//*   get orderItems of user from database using orderId
export const requestOrderItems = (orderId) => {
  return axios.get(`${url}/user/order/items/${orderId}`);
};

//*   post reviews to database
export const requestUserReview = (review) => {
  return axios.post(`${url}/user/review`, { review });
};

//*   fetch reviews from database
export const requestReviews = () => {
  return axios.get(`${url}/user/review`);
};

// TODO: GET REQUEST FOR CURRENT USER ORDERS
export const requestCurrentUserOrder = email => {
  return axios.get(`${url}/user/order/${email}`)
}


