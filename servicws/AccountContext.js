import React, { useState, createContext } from "react";
import { Login } from "./AccountService";

export const Account = createContext();

export const AccountContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setLoading(true);
    Login(email, password)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Account.Provider
      value={{
        loading,
        error,
        user,
        onLogin: login,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </Account.Provider>
  );
};
