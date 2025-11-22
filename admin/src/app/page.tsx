"use client";

import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import LoginPage from "./login/page";
import Dashboard from "./dashboard/page"

export default function AdminHome() {
  const adminContext = useContext(AdminContext);

  if (!adminContext) return null;

  const { atoken } = adminContext;

  return (
    <>
      {atoken ? (
        <Dashboard />
      ) : (
        <LoginPage />
      )}
    </>
  );
}
