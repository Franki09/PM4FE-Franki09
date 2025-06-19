"use client";
import { IUser } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type SaveUserPayload = {
  user: IUser;
  token: string;
  login: boolean;
};

type AuthContextType = {
  //* States  // los valores que se van a compartir
  user: IUser | null;
  token?: string | null;
  isAuth: boolean | null;
  //! Actions // las funciones que se van a compartir
  saveUserData: (data: SaveUserPayload) => void;
  resetUserData: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_LOCAL_KEY = "user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  //* States
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);

  //! Actions
  const saveUserData = (data: SaveUserPayload) => {
    setUser(data.user);
    setToken(data.token);
    setIsAuth(data.login);

    //persistir el usuario en localStorage
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(data));
  };

  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);

    //remover el usuario de localStorage
    localStorage.removeItem(USER_LOCAL_KEY);
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(USER_LOCAL_KEY) || "{}");

    console.log("storage", storage);
    if (storage === undefined || !Object.keys(storage)?.length) {
      setIsAuth(false);
      // si no hay datos en localStorage, no hay usuario autenticado
      return;
    }

    const storageType = storage; // as any (tenia cande)
    setUser(storage?.user);
    setIsAuth(storage?.login);
    setToken(storageType?.token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        //* States
        user,
        token,
        isAuth,
        //! Actions
        saveUserData,
        resetUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
// const {...las props del context} = useAuthContext();
export const useAuthContext = () => {
  // Component
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
  }

  return context;
};
