import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../services/auth";

import StandardDashboard from "./StandardDashboard";
import AdminDashboard from "./AdminDashboard";
import DisabledUser from "./DisabledUser";

export default function HomePage() {
  useEffect(() => {
    console.log(localStorage.getItem("acesso"));
    if (!localStorage.getItem("acesso")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      {localStorage.getItem("acesso") === "1" && <StandardDashboard />}
      {localStorage.getItem("acesso") === "999" && <AdminDashboard />}
      {localStorage.getItem("acesso") === "0" && <DisabledUser />}
    </div>
  );
}
