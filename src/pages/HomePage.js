import React from "react";

import LoginForm from "../components/LoginForm";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-12">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
