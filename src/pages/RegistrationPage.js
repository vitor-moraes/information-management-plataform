import React, { useEffect } from "react";

import RegistrationForm from "../components/RegistrationForm";
import RegistrationMensage from "../components/RegistrationMensage";

export default function RegistrationPage() {
  useEffect(() => {
    window.document.title = "Cadastro";
  }, []);

  return (
    <>
      <div className="container heigth-100vh">
        <div
          className="card mt-5 mx-auto"
          style={{ maxWidth: 900, maxHeight: 515 }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-12">
                <RegistrationMensage />
              </div>
              <div className="vertical-line-taller" />
              <div className="col-md-5 col-12 form-body">
                <RegistrationForm />
              </div>
            </div>
            {/* Button to go back */}
            <div className="back-button" style={{ maxWidth: 200 }}>
              <a
                className="btn btn-custom waves-btn waves-effect mt-3"
                href="/login"
              >
                Voltar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
