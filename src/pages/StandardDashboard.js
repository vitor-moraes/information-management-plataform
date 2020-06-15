import React, { useEffect } from "react";
import StandardUser from "../components/StandardUser";

export default function StandardDashboard() {
  useEffect(() => {
    window.document.title = "Site";
  }, []);
  return (
    <>
      <StandardUser />
      {/* Button to go back */}
      <div className="back-admin-button" style={{ maxWidth: 200 }}>
        <a className="btn btn-custom waves-btn waves-effect mt-3" href="/login">
          Voltar
        </a>
      </div>
    </>
  );
}
