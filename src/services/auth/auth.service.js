import axios from "axios";

// Helper function to get the base URL from environment variables
const getBaseUrl = () => {
  return import.meta.env.PUBLIC_URL || ""; // Fallback to an empty string if the environment variable is not defined
};

const baseUrl = "http://localhost:8000";

// Register new user
export const requestRegisterUser = (name, email, password, phoneNumber) => {
  return axios.post(`http://localhost:8000/auth/user`, {
    name,
    email,
    password,
    phoneNumber,
  });
};

// Register admin
export const requestRegisterAdmin = (name, email, password) => {
  return axios.post(`http://localhost:8000/auth/register/admin`, {
    name,
    email,
    password,
  });
};

// Login
export const requestLogin = (email, password) => {
  return axios.post(`http://localhost:8000/auth/login`, {
    email,
    password,
  });
};

// Verify email with verification code
export const requestCustomerEmailVerification = (
  verificationId,
  verificationCode
) => {
  return axios.post(`http://localhost:8000/auth/verify/user`, {
    verificationCode,
    verificationId,
  });
};

// for password👇👇👇👇
// Request verification code
export const requestVerificationNumber = (email) => {
  return axios.get(`http://localhost:8000/auth/verification/code/${email}`);
};

// Verify code to reset password
export const requestVerification = (verificationId, verificationCode) => {
  return axios.post(`http://localhost:8000/auth/verification`, {
    verificationCode,
    verificationId,
  });
};

// Update password
export const requestPasswordUpdate = (verificationId, password) => {
  return axios.post(`http://localhost:8000/auth/password`, {
    password,
    verificationId,
  });
};

// Resend verification code
export const requestVerificationResend = (verificationId) => {
  return axios.get(`http://localhost:8000/auth/resend/verification/${ verificationId }`);
};
