import React, { useState, useEffect } from "react";
import api from "../services/api";
import InputMask from "react-input-mask";

export default function StandardUser() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);
  const data = new FormData(); // Necessário sempre que for utilzar arquivos
  //
  const getUser = async () => {
    try {
      console.log(localStorage.getItem("id"));
      const response = await api.get("users/get/" + localStorage.getItem("id"));
      console.log(response);
      setUserData(() => response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      let cpf = response.data.cpf.replace(".", "");
      cpf = cpf.replace("-", "");
      setCpf(cpf);
    } catch (error) {
      console.log(error);
    }
  };

  // Editing the data
  const editUser = async (e) => {
    e.preventDefault();
    console.log(name, cpf, email);
    data.append("name", name);
    data.append("cpf", cpf);
    data.append("email", email);
    if (file) {
      data.append(
        "fileImage",
        new File([file], Date.now() + ".jpg", {
          type: "image/jpg",
        })
      );
    }
    try {
      await api.post("/users/edit/" + userData.id, data);
      console.log("Editado com sucesso");
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {}, [userData]);

  return (
    <div>
      return (
      {userData !== null ? (
        <div>
          <div className="container">
            <div className="card mt-2">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    className="image-user"
                    src={userData.img_path}
                    width="150"
                    alt="profileImage"
                  ></img>
                </div>
                <div className="col-sm-4">
                  <p className="user-info">
                    <strong>Nome: </strong>
                    {userData.name}
                  </p>
                  <p className="user-info">
                    <strong>CPF: </strong>
                    {userData.cpf}
                  </p>
                  <p className="user-info">
                    <strong>E-mail: </strong>
                    {userData.email}
                  </p>
                  <p className="user-info">
                    <strong>Acesso: </strong>
                    {userData.access === 999 && "Admin"}
                    {userData.access === 1 && "Comum"}
                    {userData.access === 0 && "DESATIVADO"}
                  </p>
                </div>
                <div className="col-sm-4"></div>
              </div>
              {/*  */}
              {/* Formulário */}
              {/*  */}
              <form onSubmit={editUser} encType="multipart/form-data">
                <div className="container registration-body">
                  <div className="form-group mt-5">
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
                      defaultValue={userData.name}
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
                      // value={userData.cpf}
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
                      defaultValue={userData.email}
                      className="form-control form-layout"
                      id="email"
                      name="email"
                      placeholder="Insira seu e-mail"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />

                    {/* add picture requisitation place */}
                    <label className="form-names-layout" htmlFor="file">
                      Foto de perfil
                    </label>
                    <input
                      type="file"
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
                      className="btn btn-custom waves-btn waves-effect mt-3"
                      type="submit"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>Nenhum dado encontrado</h1>
      )}
    </div>
  );
}
