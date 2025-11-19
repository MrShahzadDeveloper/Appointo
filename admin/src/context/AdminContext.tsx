import { createContext, useState, ReactNode } from "react";

interface AdminContextType {
  data: string | null;
  setData: (value: string | null) => void;
}

export const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  
  const [data, setData] = useState<string | null>(null);

  const value: AdminContextType = {
    data,
    setData,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
