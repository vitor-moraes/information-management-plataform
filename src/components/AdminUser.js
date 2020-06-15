import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function AdminUser() {
  const [userData, setUserData] = useState(null);
  const getAllUsers = async () => {
    try {
      const response = await api.get("users/getAll");
      setUserData(() => [...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {userData !== null ? (
        userData.map((user) => {
          return (
            <div>
              <div className="container">
                <div className="card mt-2">
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        className="image-user mr-5 ml-5 img-thumbnail"
                        src={user.img_path}
                        width="150"
                        alt="profileImage"
                      ></img>
                    </div>
                    <div className="col-sm-4">
                      <p className="user-info">
                        <strong>Nome: </strong>
                        {user.name}
                      </p>
                      <p className="user-info">
                        <strong>CPF: </strong>
                        {user.cpf}
                      </p>
                      <p className="user-info">
                        <strong>E-mail: </strong>
                        {user.email}
                      </p>
                      <p className="user-info">
                        <strong>Acesso: </strong>
                        {user.access}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <button className="btn-admin-custom">Editar</button>
                      <button className="btn-admin-custom">
                        Ativar/Desativar
                      </button>
                      <button className="btn-admin-custom">Deletar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Nenhum dado encontrado</h1>
      )}
    </div>
  );
}
