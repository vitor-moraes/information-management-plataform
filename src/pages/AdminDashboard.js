import React from "react";
import AdminUser from "../components/AdminUser";

export default function AdminDashboard() {
  return (
    <>
      <AdminUser />
      {/* Button to go back */}
      <div className="back-admin-button" style={{ maxWidth: 200 }}>
        <a className="btn btn-custom waves-btn waves-effect mt-3" href="/login">
          Voltar
        </a>
      </div>
    </>
  );
}
