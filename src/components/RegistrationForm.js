import React, { useState } from "react";
import api from "../services/api";
import InputMask from "react-input-mask";

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
    <>
      {/* User information form */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="container registration-body">
          <div className="form-group">
            <label className="form-names-layout" htmlFor="name">
              Nome Completo
            </label>
            {/* Full name's input */}
            <input
              type="name"
              required
              className="form-control form-layout"
              id="name"
              name="name"
              placeholder="Insira seu nome completo"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* CPF's input */}
            <label className="form-names-layout" htmlFor="cpf">
              CPF
            </label>
            <InputMask
              type="text"
              name="cpf"
              mask="999.999.999-99"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              required
              className="form-control form-layout"
              id="cpf"
              name="cpf"
              placeholder="xxx.xxx.xxx-xx"
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
            {/* E-mail's imput */}
            <label className="form-names-layout" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              required
              className="form-control form-layout"
              id="email"
              name="email"
              placeholder="Insira seu e-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* Password's input */}
            <label className="form-names-layout" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              required
              className="form-control form-layout"
              id="password"
              name="password"
              placeholder="Insira a sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* add picture requisitation place */}
            <label className="form-names-layout" htmlFor="file">
              Foto de perfil
            </label>
            <input
              type="file"
              required
              className="form-control form-layout"
              accept=".jpg"
              id="file"
              name="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          {/* Button to register*/}
          <div
            className="mx-auto col-12 col-md-6 text-center"
            style={{ maxWidth: 200 }}
          >
            <button
              className="btn btn-custom btn-registrarion waves-btn waves-effect mt-3"
              type="submit"
            >
              Cadastrar-se
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
