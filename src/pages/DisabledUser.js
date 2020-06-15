import React, { useEffect } from "react";

export default function DisabledUser() {
  useEffect(() => {
    window.document.title = "DESATIVADA";
  }, []);
  return (
    <div className="container col-12 mt-5">
      <div className="card centralize">
        <div className="row centralize mt-4" style={{ height: 80 }}>
          <h3 className="disable-mensage">Esta conta está desativada</h3>
        </div>
        <div className="horizontal-line-shorter"></div>
      </div>
    </div>
  );
}
