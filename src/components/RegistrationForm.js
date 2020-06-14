import React, { useState } from "react";
import api from "../services/api";

export default function RegistrationPage() {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);
  const data = new FormData(); // Necessário sempre que for utilzar arquivos

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("name", name);
    data.append("cpf", cpf);
    data.append("email", email);
    data.append("password", password);
    data.append(
      "fileImage",
      new File([file], Date.now() + ".jpg", {
        type: "image/jpg",
      })
    );
    try {
      await api.post("/users/new", data);
      console.log("Cadastrado com sucesso");
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Registration Header (this can be transform into a component)
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <div classname="registration-header">
            <div classname="text-center">
              <h3>Cadastre-se abaixo!</h3>
              <p>Não demora nem um minuto!</p>
            </div>
          </div>
        </div>
      </div>
      {/* User information form */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              type="text"
              name="cpf"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              required
              className="form-control"
              id="cpf"
              name="cpf"
              placeholder="xxx.xxx.xxx-xx"
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
            <label htmlFor="file">Foto de perfil</label>
            <input
              type="file"
              required
              className="form-control"
              id="file"
              name="file"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {/* Button to register*/}
          <div
            className="mx-auto col-12 col-md-6 text-center"
            style={{ maxWidth: 200 }}
          >
            <button
              className="btn btn-custom waves-btn waves-effect mt-3"
              type="submit"
            >
              Entrar
            </button>
          </div>
          <div
            className="col-12 col-md-6 text-center"
            style={{ maxWidth: 200 }}
          >
            <a
              className="btn btn-custom waves-btn waves-effect mt-3"
              href="/home"
            >
              Voltar
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
