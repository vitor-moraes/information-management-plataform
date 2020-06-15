import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../services/auth";
import AdminUser from "../components/AdminUser";

export default function HomePage() {
  useEffect(() => {
    console.log(localStorage.getItem("acesso"));
    if (!isAuthenticated()) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      {localStorage.getItem("acesso") === "1" && <h1>Comum</h1>}
      {localStorage.getItem("acesso") === "999" && <AdminUser />}
      {localStorage.getItem("acesso") === "0" && <h1>Desativado</h1>}
    </div>
  );
}
