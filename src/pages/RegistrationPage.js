import React, { useState } from "react";

export default function RegistrationPage() {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // Add perfil imagem

  const handleSubmit = async () => {
    try {
      // Add api
      //const response = await ...
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Registration Header (this can be transform into a component)
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <div className="row">
            <div classname="registration-header">
              <div classname="text-center">
                <h3>Cadatre-se abaixo!</h3>
                <p>Não demora nem um minuto!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* User information form */}
      <form onSubmit={handleSubmit}>
        <div className="container registration-body">
          <div className="form-group mt-5">
            <label htmlFor="name">Nome Completo</label>
            {/* Full name's input */}
            <input
              type="name"
              required
              className="form-control"
              id="name"
              name="name"
              placeholder="Insira seu nome completo"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* CPF's input */}
            <label htmlFor="cpf">CPF</label>
            <input
              type="cpf"
              required
              className="form-control"
              id="cpf"
              name="cpf"
              placeholder="Insira seu CPF"
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
            {/* E-mail's imput */}
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              required
              className="form-control"
              id="email"
              name="email"
              placeholder="Insira seu E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* Password's input */}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              name="password"
              placeholder="Insira a sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* add picture requisitation place */}
            {/*  */}
            {/*  */}
          </div>
          {/* Button to register*/}
          <div className="mx-auto col-12 col-md-6 text-center" style={{ maxWidth: 200 }}>
            <button className="btn btn-custom waves-btn waves-effect mt-3">
              Entrar
            </button>
          </div>
          {/* Button to go back
          <div className="col-12 col-md-6 text-center" style={{ maxWidth: 200 }}>
            <button className="btn btn-custom waves-btn waves-effect mt-3" href="">
              Voltar
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
}
