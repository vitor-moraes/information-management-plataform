import React, { useEffect } from "react";

export default function DisabledUser() {
  useEffect(() => {
    window.document.title = "DESATIVADA";
  }, []);
  return (
    <div className="container mt-5">
      <div className="card centralize">
        <div className="row centralize">
          <h2>Esta conta está desativada</h2>
        </div>
      </div>
    </div>
  );
}
