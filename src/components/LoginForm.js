import React, { useState } from "react";

import api from "../services/api";
import { login } from "../services/auth";

export default function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpf, setCpf] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/users/login", { email, password });
      console.log(response);
      login(response.data.token);
      const dataUser = await api.get("users/getByEmail/" + email);
      localStorage.setItem("acesso", dataUser.data.access);
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h3>Faça Seu Login!</h3>
        <p>
          Entre em nosso sistema para ter acesso as informações de interesse!
        </p>
      </div>
      <form>
        <div className="form-group mt-5">
          <div className="mt-3">
            <label htmlFor="login">CPF / E-mail</label>
            <input
              type="text"
              required
              className="form-control"
              id="login"
              name="login"
              placeholder="Insira seu CPF ou E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              name="password"
              placeholder="Insira sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mx-auto text-center" style={{ maxWidth: 200 }}>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-custom waves-btn waves-effect mt-3"
            >
              Entrar
            </button>
          </div>
          <div className="mt-3 text-center">
            <p>
              Não possui uma conta?
              <a className="register-link ml-1" href="/cadastro">
                cadastre-se aqui.
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
