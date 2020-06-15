import React, { useEffect } from "react";

import LoginForm from "../components/LoginForm";
import LoginLogo from "../components/LoginLogo";

export default function LoginPage() {
  useEffect(() => {
    window.document.title = "Login";
  }, []);

  return (
    <>
      <div className="container">
        <div className="card mt-5 mx-auto shadow" style={{ maxWidth: 800 }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-5 col-12 mx-auto">
                <LoginLogo />
              </div>
              <div className="vertical-line" />
              <div
                className="col-md-5 col-12 mx-auto"
                style={{ maxHeight: 800 }}
              >
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
