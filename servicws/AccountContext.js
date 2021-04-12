import React, { useState, createContext } from "react";
import { Login } from "./AccountService";
import * as firebase from "firebase";

export const Account = createContext();

export const AccountContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const login = (email, password) => {
    setLoading(true);
    Login(email, password)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
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
        onRegister,
        onLogout,
      }}
    >
      {children}
    </Account.Provider>
  );
};
