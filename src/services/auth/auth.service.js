import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

//* Register new user
export const requestRegisterUser = (name, email, password, phoneNumber) => {
  return axios.post(`${url}/auth/user`, {
    name,
    email,
    password,
    phoneNumber,
  });
};

//* Register admin
export const requestRegisterAdmin = (name, email, password) => {
  return axios.post(`${url}/auth/register/admin`, {
    name,
    email,
    password,
  });
};

//* Login
export const requestLogin = (email, password) => {
  return axios.post(`${url}/auth/login`, {
    email,
    password,
  });
};

//* Verify email with verification code
export const requestCustomerEmailVerification = (
  verificationId,
  verificationCode
) => {
  return axios.post(`${url}/auth/verify/user`, {
    verificationCode,
    verificationId,
  });
};

//* for password👇👇👇👇
//* Request verification code
export const requestVerificationNumber = (email) => {
  return axios.get(`${url}/auth/verification/code/${email}`);
};

//* Verify code to reset password
export const requestVerification = (verificationId, verificationCode) => {
  return axios.post(`${url}/auth/verification`, {
    verificationCode,
    verificationId,
  });
};

//* Update password
export const requestPasswordUpdate = (verificationId, password) => {
  return axios.post(`${url}/auth/password`, {
    password,
    verificationId,
  });
};

//* Resend verification code
export const requestVerificationResend = (verificationId) => {
  return axios.get(`${url}/auth/resend/verification/${ verificationId }`);
};
