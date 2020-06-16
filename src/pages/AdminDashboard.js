import React, { useEffect } from "react";
import AdminUser from "../components/AdminUser";

export default function AdminDashboard() {
  useEffect(() => {
    window.document.title = "Admin Dashboard";
  }, []);
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="admin-dashbord text-center">Admin Dashboard</h1>
        </div>
      </div>
      <div>
        <AdminUser />
        {/* Button to go back */}
        <div className="back-admin-button" style={{ maxWidth: 200 }}>
          <a
            className="btn btn-custom waves-btn waves-effect mt-3"
            href="/login"
          >
            Voltar
          </a>
        </div>
      </div>
    </>
  );
}
