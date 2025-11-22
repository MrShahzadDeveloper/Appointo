'use client'

import { createContext, useState, ReactNode, useEffect } from "react";

interface AdminContextType {
  atoken: string;
  setAtoken: (value: string) => void;
  backend_url: string | undefined;
}

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  const [atoken, setAtoken] = useState<string>('');
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Load token from localStorage on client
  useEffect(() => {
    const storedToken = localStorage.getItem("atoken");
    if (storedToken) {
      setAtoken(storedToken);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ atoken, setAtoken, backend_url }}>
      {children}
    </AdminContext.Provider>
  );
};
