"use client";

import { AdminContextProvider } from "@/context/AdminContext";
import { DoctorContextProvider } from "@/context/DoctorContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    
  return (
    <>
      <AdminContextProvider>
        <DoctorContextProvider>
          {children}
        </DoctorContextProvider>
      </AdminContextProvider>

      {/* Global Toasts */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
