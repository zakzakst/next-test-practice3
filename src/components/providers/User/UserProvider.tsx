"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { User } from "@/types/User";

export type UserContextType = {
  user: User | null;
  setUser: (id: number) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, _setUser] = useState<User | null>(null);
  const setUser = (id: number) => {
    _setUser({
      id,
      name: `ユーザー${id}`,
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserはUserProviderの中で利用してください");
  }
  return context;
};
