/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { User } from "../type";

interface AuthContextDataType {
  user: User | null;
  loading: boolean;
  error?: string | null;
}
const AUTH_DEFAULT: AuthContextDataType = {
  user: null,
  loading: true,
  error: null,
};

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [authContext, setAuthContext] = useState(AUTH_DEFAULT);

  // initialise
  useEffect(() => {
    // Get user from local storage
    const user = localStorage.getItem("user");
    if (user) {
      setAuthContext({
        ...authContext,
        user: JSON.parse(user),
        loading: false,
      });
      return;
    }
    setAuthContext({
      ...authContext,
      loading: false,
    });
  }, []);

  const signIn = (email: string, password: string) => {
    // TODO : Call backend to validate user
    const user: User = {
      email,
      name: "shivom",
      id: "1eejadsfkhf",
      token: "Bearer dsfhkhafgdsjkhfakjsdhljkasf",
    };
    localStorage.setItem("user", JSON.stringify(user));
    setAuthContext({
      ...authContext,
      user: user,
    });
  };
  const signOut = () => {
    localStorage.removeItem("user");
    setAuthContext({
      ...authContext,
      user: null,
    });
  };
  const signUp = (email: string, password: string, name: string) => {
    // TODO: create user in db / call backend
    const user: User = {
      email,
      name,
      id: "1eejadsfkhf",
      token: "Bearer dsfhkhafgdsjkhfakjsdhljkasf",
    };
    localStorage.setItem("user", JSON.stringify(user));
    setAuthContext({
      ...authContext,
      user: user,
    });
  };
  return (
    <AuthContext.Provider value={{ ...authContext, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
