import React, { useState, createContext } from "react";

export type AuthUserTypes = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUserTypes | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUserTypes | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUserTypes | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
