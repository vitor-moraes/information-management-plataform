import React, {useEffect} from 'react'

import RegistrationForm from "../components/RegistrationForm";

export default function RegistrationPage() {
  
useEffect(() => {
    window.document.title = 'Cadastro';
},[])

  return (
    <>
      <div className="container heigth-100vh">
        <div className="card mt-5 mx-auto" style={{maxWidth: 600}}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-12">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
