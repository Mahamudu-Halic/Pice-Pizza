import { useState } from "react";
import { createContext } from "react";
import {
  requestCustomerEmailVerification,
  requestLogin,
  requestPasswordUpdate,
  requestRegisterAdmin,
  requestRegisterUser,
  requestVerification,
  requestVerificationNumber,
  requestVerificationResend,
} from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const registerUser = () => {
    setIsLoading(true);
    setError(null);

    requestRegisterUser(name, email, password, phoneNumber)
      .then((response) => {
        setStatus(response?.status);
        setUserId(response?.data?.id);
        setVerificationId(response?.data?.verificationId);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const registerAdmin = () => {
    setIsLoading(true);
    setError(null);

    requestRegisterAdmin(name, email, password)
      .then((response) => {
        setStatus(response?.status);
        setUserId(response?.data?.id);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const login = (email, password) => {
    setIsLoading(true);
    setError(null);

    requestLogin(email, password)
      .then((response) => {
        setStatus(response?.status);
        setMessage(response?.data?.message);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const verifyCustomerEmail = () => {
    setIsLoading(true);
    setError(null);

    requestCustomerEmailVerification(verificationId, verificationCode)
      .then((response) => {
        setStatus(response?.status);
        setMessage(response?.data?.message);
        setUserId(response?.data?.id);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const sendVerificationNumber = () => {
    setIsLoading(true);
    setError(null);

    requestVerificationNumber(email)
      .then((response) => {
        setStatus(response?.status);
        setVerificationId(response?.data?.verificationId);
        setUserId(response?.data?.userId);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const verify = () => {
    setIsLoading(true);
    setError(null);

    requestVerification(verificationId, verificationCode)
      .then((response) => {
        response?.status === 200 &&
          setVerificationId(response?.data?.verificationId);
        setStatus(response?.status);
        setMessage(response?.data?.message);
        setIsVerified(true)
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const updatePassword = () => {
    setIsLoading(true);
    setError(null);

    requestPasswordUpdate(verificationId, password)
      .then((response) => {
        response?.status === 200 && setUserId(response?.data?.id);
        setStatus(response?.status);
        setMessage(response?.data?.message);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const resendVerificationCode = () => {
    setIsLoading(true);
    setError(null);

    requestVerificationResend(verificationId)
      .then((response) => {
        setStatus(response?.status);
        setMessage(response?.data?.message);
      })
      .catch((error) => setError(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  const handleReset = () => {
    setStatus(null);
    setMessage(null);
    setError(null);
  };

  const clearUserInfo = () => {
    setUser(null);
    setIsVerified(false);
  };

  const value = {
    registerUser,
    registerAdmin,
    login,
    verifyCustomerEmail,
    sendVerificationNumber,
    verify,
    updatePassword,
    resendVerificationCode,
    handleReset,
    clearUserInfo,
    setEmail,
    setName,
    setPassword,
    setPhoneNumber,
    setVerificationCode,

    verificationCode,
    email,
    password,
    name,
    phoneNumber,
    user,
    error,
    isLoading,
    userId,
    isVerified,
    message,
    status,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
