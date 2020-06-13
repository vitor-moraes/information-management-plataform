import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpf, setCpf] = useState(null);

  const handleSubmit = async () => {};

  return (
    <div className="container">
      <div className="text-center">
        <h3>Faça seu Login!</h3>
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
              placeholder="Insira a senha"
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
        </div>
      </form>
    </div>
  );
}
