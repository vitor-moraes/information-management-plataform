import React, { useEffect } from "react";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  useEffect(() => {
    window.document.title = "Login";
  }, []);

  return (
    <>
      <div className="container">
        <div className="card mt-5 mx-auto" style={{ maxWidth: 600 }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-12">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
