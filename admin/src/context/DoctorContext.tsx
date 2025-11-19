import { createContext, useState, ReactNode } from "react";

interface DoctorContextType {
  data: string | null;
  setData: (value: string | null) => void;
}

export const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorContextProvider = ({ children }: { children: ReactNode }) => {
  
  const [data, setData] = useState<string | null>(null);

  const value: DoctorContextType = {
    data,
    setData,
  };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};
