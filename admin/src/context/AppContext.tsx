import { createContext, useState, ReactNode } from "react";

interface AppContextType {
  data: string | null;
  setData: (value: string | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [data, setData] = useState<string | null>(null);

  const value: AppContextType = {
    data,
    setData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
